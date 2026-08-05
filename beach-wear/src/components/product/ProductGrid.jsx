import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return <p className="product-grid-empty">Nenhum produto encontrado.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
