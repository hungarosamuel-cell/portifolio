import { FaBolt, FaFire, FaLeaf, FaWhatsapp } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/About.css'

const FEATURES = [
  {
    icon: <FaFire />,
    title: 'Preparo na hora',
    description: 'Cada lanche é montado após o pedido, sempre fresquinho.',
  },
  {
    icon: <FaLeaf />,
    title: 'Ingredientes selecionados',
    description: 'Trabalhamos com fornecedores locais e produtos de qualidade.',
  },
  {
    icon: <FaBolt />,
    title: 'Entrega rápida',
    description: 'Seu pedido chega quentinho, no tempo combinado.',
  },
]

function About() {
  return (
    <>
      <Header />
      <main>
        <section className="about-intro">
          <div className="about-intro__glow" aria-hidden="true" />
          <div className="container about-intro__inner">
            <span className="section-kicker">Nossa história</span>
            <h1 className="about-intro__title">
              Sobre a <span className="highlight">BrutoSmash</span>
            </h1>
          </div>
        </section>

        <section className="section about-story">
          <div className="container about-story__grid">
            <div className="about-story__photo">
              <img src="/img/Logo_arredondada.png" alt="Logo redonda da BrutoSmash" />
            </div>

            <div className="about-story__content">
              <h2 className="about-story__heading">Paixão por lanches de verdade</h2>
              <p className="about-story__text">
                Nascemos da vontade de fazer o smash burger perfeito: carne bem selada,
                casquinha crocante e suco na medida certa. Combinamos receita caseira com
                técnica de chapa quente pra entregar uma experiência única — no salão ou
                no conforto da sua casa.
              </p>

              <div className="about-story__features">
                {FEATURES.map((feature) => (
                  <div className="about-story__feature" key={feature.title}>
                    <span className="about-story__feature-icon">{feature.icon}</span>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="container about-cta__inner">
            <span className="about-cta__seal">
              100%
              <br />
              Smash
            </span>
            <h2 className="section-title">Bora experimentar?</h2>
            <div className="about-cta__actions">
              <a href="/#cardapio" className="btn btn--primary">
                Ver cardápio
              </a>
              <a
                href="https://wa.me/5544991377145?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <FaWhatsapp /> Pedir no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
