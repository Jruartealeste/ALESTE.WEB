export const categorias = ['Todos', 'Branding', 'Campañas', 'Digital', 'Web', 'Redes', 'Institucional'] as const;

export interface Caso {
  slug: string;
  cliente: string;
  tipoTrabajo: string;
  anio: string;
  categoria: (typeof categorias)[number];
  desafio: string;
  queHicimos: string;
  resultado: string;
  piezas: string[];
}

export const casos: Caso[] = [
  {
    slug: 'fate',
    cliente: 'Fate',
    tipoTrabajo: 'Comunicación corporativa',
    anio: '2023',
    categoria: 'Institucional',
    desafio:
      'Fate necesitaba ordenar su comunicación institucional y llegar de forma consistente a medios, empleados y la comunidad donde opera.',
    queHicimos:
      'Diseñamos un plan de comunicación corporativa con mensajes unificados, gestión de prensa y piezas internas para reforzar la cultura de la empresa.',
    resultado:
      'Mayor presencia en medios especializados y una comunicación interna más clara y consistente entre las distintas plantas.',
    piezas: ['Plan de comunicación', 'Gestión de prensa', 'Piezas institucionales'],
  },
  {
    slug: 'malba',
    cliente: 'Malba',
    tipoTrabajo: 'Creación de marca gráfica',
    anio: '2022',
    categoria: 'Branding',
    desafio:
      'Malba buscaba un sistema visual flexible para acompañar su programación cultural sin perder identidad entre muestra y muestra.',
    queHicimos:
      'Desarrollamos un sistema de marca gráfica modular: tipografía, paleta y grilla adaptable a cada exhibición y pieza de comunicación.',
    resultado:
      'Una identidad reconocible en toda la señalética, vía pública y piezas digitales, manteniendo coherencia entre campañas.',
    piezas: ['Sistema de marca', 'Señalética', 'Piezas para vía pública y redes'],
  },
  {
    slug: 'nordelta',
    cliente: 'Nordelta',
    tipoTrabajo: 'Campaña de comunicación',
    anio: '2021',
    categoria: 'Campañas',
    desafio:
      'Nordelta necesitaba comunicar su propuesta de barrios y servicios a distintas audiencias, con un mensaje unificado en todos los canales.',
    queHicimos:
      'Creamos una campaña 360° con piezas gráficas, digitales y de vía pública, coordinadas con un mismo eje de comunicación.',
    resultado:
      'Una campaña con presencia simultánea en medios tradicionales y digitales, con métricas de alcance por encima de lo esperado.',
    piezas: ['Campaña gráfica', 'Piezas digitales', 'Vía pública'],
  },
];
