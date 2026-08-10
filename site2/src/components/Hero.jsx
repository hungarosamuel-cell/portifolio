import { FaArrowRight, FaFire, FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data/business'
import '../styles/Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grill" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <FaFire className="hero__badge-icon" /> Direto da chapa, todo dia
          </span>
          <h1 className="hero__title">
            Sabor que <span className="highlight">conquista</span> a cada mordida
          </h1>
          <p className="hero__text">
            Smash burgers artesanais, montados na hora com ingredientes selecionados.
            Peça o seu e sinta a diferença.
          </p>
          <div className="hero__actions">
            <a href="#cardapio" className="btn btn--primary">
              Ver cardápio <FaArrowRight />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              <FaWhatsapp /> Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-frame">
            <img src="/img/Logo.png" alt="Logo BrutoSmash" className="hero__logo" />
          </div>
          <div className="hero__seal">
            <span>
              100%
              <br />
              Smash
              <br />
              Artesanal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
