import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/format'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price
  const discountPct = hasDiscount
    ? Math.round(100 - (product.price / product.compareAtPrice) * 100)
    : 0

  return (
    <Link to={`/produto/${product.slug}`} className="product-card">
      <div className="product-card-media">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        <img src={product.images[1]} alt="" className="product-card-media-hover" loading="lazy" />
        {hasDiscount && <span className="product-badge">-{discountPct}%</span>}
      </div>
      <div className="product-card-info">
        <p className="product-card-name">{product.name}</p>
        <div className="product-card-prices">
          {hasDiscount && (
            <span className="product-card-compare">{formatPrice(product.compareAtPrice)}</span>
          )}
          <span className="product-card-price">{formatPrice(product.price)}</span>
        </div>
        <p className="product-card-sizes">{product.sizes.join(' · ')}</p>
      </div>
    </Link>
  )
}
