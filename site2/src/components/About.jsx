import { FaFire, FaLeaf, FaClock } from 'react-icons/fa'
import ImagePlaceholder from './ImagePlaceholder'
import '../styles/About.css'

const features = [
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
    icon: <FaClock />,
    title: 'Entrega rápida',
    description: 'Seu pedido chega quentinho, no tempo combinado.',
  },
]

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <div className="about__image">
          <ImagePlaceholder label="Adicione uma foto da equipe ou da loja" />
        </div>

        <div className="about__content">
          <h2 className="section-title about__title">
            Sobre a <span className="highlight">Bruto Smash</span>
          </h2>
          <p className="about__text">
            Nascemos da paixão por criar lanches artesanais de verdade. Combinamos
            receitas caseiras com técnicas modernas para entregar uma experiência
            única a cada visita — seja no salão ou no conforto da sua casa.
          </p>

          <div className="about__features">
            {features.map((feature) => (
              <div className="about__feature" key={feature.title}>
                <span className="about__feature-icon">{feature.icon}</span>
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
  )
}

export default About
