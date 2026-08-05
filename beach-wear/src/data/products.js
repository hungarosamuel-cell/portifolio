import { productImage } from '../utils/placeholder'

// Catálogo fictício — nomes, preços e imagens são placeholders para demonstração.
// Substitua por dados reais dos seus produtos quando estiverem prontos.

const raw = [
  // Biquínis
  {
    slug: 'top-ondina',
    name: 'Top Ondina',
    category: 'biquinis',
    price: 189,
    compareAtPrice: 229,
    colors: ['Areia', 'Petróleo', 'Coral'],
    sizes: ['P', 'M', 'G'],
    bestseller: true,
    description:
      'Top com bojo removível e alças reguláveis, em tecido de secagem rápida com proteção UV50.',
  },
  {
    slug: 'calcinha-marolina',
    name: 'Calcinha Marolina',
    category: 'biquinis',
    price: 139,
    colors: ['Areia', 'Petróleo', 'Coral'],
    sizes: ['P', 'M', 'G'],
    bestseller: true,
    description: 'Calcinha cós alto com recorte lateral, combina com toda a linha Ondina.',
  },
  {
    slug: 'top-triangulo-horizonte',
    name: 'Top Triângulo Horizonte',
    category: 'biquinis',
    price: 169,
    colors: ['Terracota', 'Off-white'],
    sizes: ['P', 'M', 'G'],
    description: 'Top triângulo com amarração dupla no colo e bojo fixo leve.',
  },
  {
    slug: 'calcinha-fio-duna',
    name: 'Calcinha Fio Duna',
    category: 'biquinis',
    price: 129,
    compareAtPrice: 159,
    colors: ['Terracota', 'Off-white', 'Petróleo'],
    sizes: ['PP', 'P', 'M', 'G'],
    description: 'Modelagem fio, cós fino e tecido com toque macio mesmo após o mar.',
  },
  {
    slug: 'top-cropped-maresia',
    name: 'Top Cropped Maresia',
    category: 'biquinis',
    price: 199,
    colors: ['Petróleo', 'Preto'],
    sizes: ['P', 'M', 'G'],
    description: 'Cropped esportivo com forro duplo, ideal para dias ativos na praia.',
  },

  // Maiôs
  {
    slug: 'maio-assimetrico-coral',
    name: 'Maiô Assimétrico Coral',
    category: 'maios',
    price: 259,
    compareAtPrice: 299,
    colors: ['Coral', 'Preto'],
    sizes: ['P', 'M', 'G', 'GG'],
    bestseller: true,
    description: 'Recorte assimétrico no busto e decote nas costas em U profundo.',
  },
  {
    slug: 'maio-canelado-baia',
    name: 'Maiô Canelado Baía',
    category: 'maios',
    price: 279,
    colors: ['Petróleo', 'Areia'],
    sizes: ['P', 'M', 'G'],
    description: 'Tecido canelado com caimento estruturado e alças cruzadas nas costas.',
  },
  {
    slug: 'maio-decote-costas-sol',
    name: 'Maiô Decote Costas Sol',
    category: 'maios',
    price: 249,
    colors: ['Preto', 'Terracota'],
    sizes: ['P', 'M', 'G'],
    bestseller: true,
    description: 'Recortes vazados nas costas em formato de sol, forro total.',
  },
  {
    slug: 'maio-longo-ilha',
    name: 'Maiô Longo Ilha',
    category: 'maios',
    price: 289,
    colors: ['Off-white', 'Petróleo'],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Perna mais alta e alças largas para conforto o dia inteiro.',
  },

  // Saídas de praia
  {
    slug: 'kaftan-linho-brisa',
    name: 'Kaftan Linho Brisa',
    category: 'saidas-de-praia',
    price: 249,
    colors: ['Off-white', 'Areia'],
    sizes: ['Único'],
    bestseller: true,
    description: 'Kaftan em linho leve com bordado artesanal nas mangas.',
  },
  {
    slug: 'saida-tunica-vento',
    name: 'Saída Túnica Vento',
    category: 'saidas-de-praia',
    price: 219,
    compareAtPrice: 259,
    colors: ['Terracota', 'Off-white'],
    sizes: ['P/M', 'G/GG'],
    description: 'Túnica curta com abertura lateral e amarração ajustável.',
  },
  {
    slug: 'vestido-transpassado-mare',
    name: 'Vestido Transpassado Maré',
    category: 'saidas-de-praia',
    price: 269,
    colors: ['Petróleo', 'Coral'],
    sizes: ['P', 'M', 'G'],
    description: 'Vestido curto transpassado, tecido fluido com caimento leve.',
  },
  {
    slug: 'saida-canga-longa',
    name: 'Saída Canga Longa',
    category: 'saidas-de-praia',
    price: 179,
    colors: ['Areia', 'Preto'],
    sizes: ['Único'],
    description: 'Comprimento longo com fenda frontal, veste várias formas de amarrar.',
  },

  // Acessórios
  {
    slug: 'chapeu-palha-tranca',
    name: 'Chapéu Palha Trança',
    category: 'acessorios',
    price: 149,
    colors: ['Natural'],
    sizes: ['Único'],
    bestseller: true,
    description: 'Palha trançada à mão com faixa de tecido removível.',
  },
  {
    slug: 'bolsa-praia-trama',
    name: 'Bolsa Praia Trama',
    category: 'acessorios',
    price: 189,
    colors: ['Natural', 'Preto'],
    sizes: ['Único'],
    description: 'Bolsa grande de trama larga com forro interno impermeável.',
  },
  {
    slug: 'oculos-sol-baia',
    name: 'Óculos de Sol Baía',
    category: 'acessorios',
    price: 129,
    compareAtPrice: 159,
    colors: ['Tartaruga', 'Preto'],
    sizes: ['Único'],
    description: 'Armação acetato com proteção UV400 e estojo incluso.',
  },
  {
    slug: 'canga-estampada-recife',
    name: 'Canga Estampada Recife',
    category: 'acessorios',
    price: 99,
    colors: ['Petróleo', 'Terracota'],
    sizes: ['Único'],
    description: 'Canga em viscose leve, estampa exclusiva LUMINA RIO.',
  },
]

export const products = raw.map((p, index) => ({
  id: String(index + 1),
  images: [productImage(`${p.slug}-1`, p.name), productImage(`${p.slug}-2`, p.name)],
  ...p,
}))

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug)
}

export function getBestsellers() {
  return products.filter((p) => p.bestseller)
}

export function getAllColors() {
  return [...new Set(products.flatMap((p) => p.colors))]
}
