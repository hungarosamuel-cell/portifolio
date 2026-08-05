export function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function installmentOf(value, parcelas = 5) {
  return formatPrice(value / parcelas)
}
