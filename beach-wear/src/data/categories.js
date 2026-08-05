export const categories = [
  {
    slug: 'biquinis',
    name: 'Biquínis',
    description: 'Tops e calcinhas para combinar do seu jeito.',
  },
  {
    slug: 'maios',
    name: 'Maiôs',
    description: 'Peça única, caimento impecável.',
  },
  {
    slug: 'saidas-de-praia',
    name: 'Saídas de Praia',
    description: 'Do areial ao pôr do sol sem trocar de look.',
  },
  {
    slug: 'acessorios',
    name: 'Acessórios',
    description: 'Chapéus, bolsas e os últimos detalhes.',
  },
]

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug)
}
