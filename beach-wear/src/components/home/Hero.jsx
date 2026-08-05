import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Coleção Verão</p>
        <h1>Leveza que veste o seu verão</h1>
        <p className="hero-sub">
          Biquínis, maiôs e saídas de praia pensados para o litoral brasileiro — tecidos que
          secam rápido e caimento que acompanha o movimento do mar.
        </p>
        <div className="hero-actions">
          <Link to="/loja" className="btn btn-primary">
            Ver coleção
          </Link>
          <Link to="/loja/biquinis" className="btn btn-outline">
            Biquínis
          </Link>
        </div>
      </div>
    </section>
  )
}
