/**
 * Uploads all local .mp4 files from public/casos/ to Cloudinary
 * and updates the corresponding index.md files in src/content/casos/
 * with the Cloudinary URLs.
 *
 * Usage: node upload-videos.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join } from 'path';
import { v2 as cloudinary } from 'cloudinary';

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME?.trim();
const CLOUDINARY_API_KEY    = process.env.CLOUDINARY_API_KEY?.trim();
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET?.trim();

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error('❌  Faltan credenciales. Corré: node --env-file=.env upload-videos.mjs');
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const CASOS_PUBLIC  = 'public/casos';
const CASOS_CONTENT = 'src/content/casos';

// Collect all mp4s grouped by caso slug
const casos = readdirSync(CASOS_PUBLIC).filter(name =>
  statSync(join(CASOS_PUBLIC, name)).isDirectory()
);

for (const slug of casos) {
  const videoDir = join(CASOS_PUBLIC, slug);
  const mp4s = readdirSync(videoDir).filter(f => f.endsWith('.mp4'));
  if (mp4s.length === 0) continue;

  const indexPath = join(CASOS_CONTENT, slug, 'index.md');
  if (!existsSync(indexPath)) {
    console.warn(`⚠️  No existe ${indexPath}, saltando`);
    continue;
  }

  let md = readFileSync(indexPath, 'utf8');
  let changed = false;

  for (const filename of mp4s) {
    const localPath = join(videoDir, filename);
    const localRef  = `/casos/${slug}/${filename}`;   // path usado en el .md

    if (!md.includes(localRef)) {
      console.log(`   ↷ ${filename} no está referenciado en index.md, saltando`);
      continue;
    }

    console.log(`⬆️  Subiendo ${slug}/${filename} (${(statSync(localPath).size / 1e6).toFixed(1)} MB)...`);

    try {
      const result = await cloudinary.uploader.upload_large(localPath, {
        resource_type: 'video',
        folder: `aleste/casos/${slug}`,
        public_id: filename.replace('.mp4', ''),
        overwrite: true,
        chunk_size: 6_000_000,
      });

      console.log(`   ✅ keys:`, Object.keys(result));
      console.log(`   ✅ ${result.secure_url}`);
      md = md.replaceAll(localRef, result.secure_url);
      changed = true;
    } catch (err) {
      console.error(`   ❌ Error subiendo ${filename}:`, err.message);
    }
  }

  if (changed) {
    writeFileSync(indexPath, md, 'utf8');
    console.log(`   📝 Actualizado ${indexPath}\n`);
  }
}

console.log('🎉 Listo. Revisá los index.md y hacé commit.');
