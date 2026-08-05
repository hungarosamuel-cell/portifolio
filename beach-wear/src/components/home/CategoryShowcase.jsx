import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { productImage } from '../../utils/placeholder'
import './CategoryShowcase.css'

export default function CategoryShowcase() {
  return (
    <section className="section category-showcase">
      <div className="container">
        <div className="section-heading">
          <h2>Compre por categoria</h2>
          <span className="section-sub">Encontre a peça certa para o seu dia de praia</span>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/loja/${cat.slug}`} className="category-card">
              <div
                className="category-card-media"
                style={{ backgroundImage: `url(${productImage(cat.slug, cat.name)})` }}
              />
              <div className="category-card-info">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
