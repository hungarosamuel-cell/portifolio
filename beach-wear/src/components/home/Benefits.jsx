import './Benefits.css'

const BENEFITS = [
  {
    title: 'Envio para todo o Brasil',
    text: 'Rastreio disponível em todos os pedidos.',
    icon: '🚚',
  },
  {
    title: 'Frete grátis',
    text: 'Em compras acima de R$400.',
    icon: '🏖️',
  },
  {
    title: 'Troca grátis',
    text: 'Até 30 dias após o recebimento.',
    icon: '↺',
  },
  {
    title: 'Parcelamento',
    text: 'Em até 5x sem juros no cartão.',
    icon: '✓',
  },
]

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container benefits-grid">
        {BENEFITS.map((b) => (
          <div key={b.title} className="benefit-item">
            <span className="benefit-icon" aria-hidden="true">
              {b.icon}
            </span>
            <div>
              <p className="benefit-title">{b.title}</p>
              <p className="benefit-text">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
