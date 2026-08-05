import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import Benefits from '../components/home/Benefits'
import CategoryShowcase from '../components/home/CategoryShowcase'
import ProductGrid from '../components/product/ProductGrid'
import { getBestsellers } from '../data/products'
import './Home.css'

export default function Home() {
  const bestsellers = getBestsellers()

  return (
    <>
      <Hero />
      <Benefits />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Mais vendidos</h2>
            <Link to="/loja" className="section-sub">
              Ver tudo →
            </Link>
          </div>
          <ProductGrid products={bestsellers} />
        </div>
      </section>

      <CategoryShowcase />

      <section className="brand-band">
        <div className="container brand-band-inner">
          <p className="eyebrow">Nossa essência</p>
          <h2>Feito para viver o litoral</h2>
          <p>
            A LUMINA RIO nasceu para vestir o verão brasileiro com peças que unem conforto,
            durabilidade e um design que não sai de moda a cada estação.
          </p>
        </div>
      </section>
    </>
  )
}
