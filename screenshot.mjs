// Captura una URL (sitio en vivo o servidor local) y la guarda en "temporary screenshots/"
// Uso: node screenshot.mjs <url> [label] [--full] [--width=N] [--height=N]
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const url = args.find((a) => !a.startsWith("--"));
const label = args.filter((a) => !a.startsWith("--"))[1];
const fullPage = args.includes("--full");
const width = Number(args.find((a) => a.startsWith("--width="))?.split("=")[1]) || 1440;
const height = Number(args.find((a) => a.startsWith("--height="))?.split("=")[1]) || 900;

if (!url) {
  console.error("Uso: node screenshot.mjs <url> [label] [--full] [--width=N] [--height=N]");
  process.exit(1);
}

const outDir = path.resolve("temporary screenshots");
fs.mkdirSync(outDir, { recursive: true });

let n = 1;
const existing = fs.readdirSync(outDir);
for (const f of existing) {
  const m = f.match(/^screenshot-(\d+)/);
  if (m) n = Math.max(n, Number(m[1]) + 1);
}
const filename = `screenshot-${n}${label ? `-${label}` : ""}.png`;
const outPath = path.join(outDir, filename);

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
  await page.screenshot({ path: outPath, fullPage });
  console.log(`Guardado: ${outPath}`);
} finally {
  await browser.close();
}
