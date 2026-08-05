// Gera imagens placeholder em SVG (data URI) no lugar de fotos reais de produto.
// Cada chamada produz um cartão abstrato com gradiente + horizonte + sol,
// inspirado na estética "praia moderna" da marca, sem depender de imagens externas.

const PALETTES = [
  ['#1f6f78', '#5fa8ae'],
  ['#ff7a59', '#ffd7a8'],
  ['#144d54', '#1f6f78'],
  ['#16242b', '#4b5c63'],
  ['#e85f3d', '#ff7a59'],
  ['#0f3d42', '#1f6f78'],
]

function hashString(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0
  }
  return hash
}

export function productImage(seed = 'lumina', label = '') {
  const hash = hashString(seed)
  const [from, to] = PALETTES[hash % PALETTES.length]
  const sunCx = 140 + (hash % 320)
  const sunR = 46 + (hash % 24)
  const initial = (label || seed).trim().charAt(0).toUpperCase() || 'L'

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="bg-${hash}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${from}" />
      <stop offset="100%" stop-color="${to}" />
    </linearGradient>
  </defs>
  <rect width="600" height="800" fill="url(#bg-${hash})" />
  <circle cx="${sunCx}" cy="230" r="${sunR}" fill="#faf6ef" opacity="0.35" />
  <path d="M0 520 Q150 480 300 520 T600 520 V800 H0 Z" fill="#faf6ef" opacity="0.12" />
  <path d="M0 600 Q150 560 300 600 T600 600 V800 H0 Z" fill="#faf6ef" opacity="0.18" />
  <text x="50%" y="54%" font-family="Georgia, serif" font-size="220" font-weight="600"
    fill="#faf6ef" fill-opacity="0.16" text-anchor="middle" dominant-baseline="middle">${initial}</text>
</svg>`.trim()

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
