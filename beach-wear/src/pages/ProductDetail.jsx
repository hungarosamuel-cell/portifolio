import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductGrid from '../components/product/ProductGrid'
import { useCart } from '../context/CartContext'
import { getCategoryBySlug } from '../data/categories'
import { getProductBySlug, getProductsByCategory } from '../data/products'
import { formatPrice, installmentOf } from '../utils/format'
import './ProductDetail.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem, openCart } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [size, setSize] = useState(product?.sizes[0] ?? '')
  const [color, setColor] = useState(product?.colors[0] ?? '')
  const [added, setAdded] = useState(false)

  if (!product) {
    return <Navigate to="/loja" replace />
  }

  const category = getCategoryBySlug(product.category)
  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  function handleAddToCart() {
    addItem(product, { size, color, quantity: 1 })
    setAdded(true)
    openCart()
  }

  return (
    <section className="section product-detail">
      <div className="container">
        <nav className="breadcrumbs">
          <Link to="/loja">Loja</Link>
          {category && <Link to={`/loja/${category.slug}`}>{category.name}</Link>}
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          <div className="product-gallery">
            <div className="product-gallery-main">
              <img src={product.images[activeImage]} alt={product.name} />
            </div>
            <div className="product-gallery-thumbs">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  className={i === activeImage ? 'is-active' : ''}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <p className="eyebrow">{category?.name}</p>
            <h1>{product.name}</h1>

            <div className="product-price-row">
              {product.compareAtPrice && (
                <span className="product-compare">{formatPrice(product.compareAtPrice)}</span>
              )}
              <span className="product-price">{formatPrice(product.price)}</span>
            </div>
            <p className="product-installments">
              ou 5x de {installmentOf(product.price)} sem juros
            </p>

            <p className="product-description">{product.description}</p>

            <div className="product-option">
              <span className="product-option-label">Cor: {color}</span>
              <div className="product-option-values">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    className={c === color ? 'is-active' : ''}
                    onClick={() => setColor(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-option">
              <span className="product-option-label">Tamanho: {size}</span>
              <div className="product-option-values">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={s === size ? 'is-active' : ''}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn btn-primary btn-block product-add-btn" onClick={handleAddToCart}>
              Adicionar ao carrinho
            </button>
            {added && <p className="product-added-note">Adicionado ao carrinho ✓</p>}

            <ul className="product-meta-list">
              <li>Tecido com secagem rápida e proteção UV50</li>
              <li>Troca grátis em até 30 dias</li>
              <li>Frete grátis a partir de R$400</li>
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="related-products">
            <div className="section-heading">
              <h2>Combine também</h2>
            </div>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </section>
  )
}
