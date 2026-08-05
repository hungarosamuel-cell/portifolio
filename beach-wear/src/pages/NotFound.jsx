import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '96px 24px' }}>
      <p className="eyebrow">404</p>
      <h1 style={{ margin: '12px 0 20px' }}>Página não encontrada</h1>
      <Link to="/" className="btn btn-primary">
        Voltar para a Home
      </Link>
    </section>
  )
}
