import { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/product/ProductGrid'
import { categories, getCategoryBySlug } from '../data/categories'
import { products } from '../data/products'
import './Shop.css'

export default function Shop() {
  const { categorySlug } = useParams()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('busca') ?? ''
  const [selectedColors, setSelectedColors] = useState([])

  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null

  const availableColors = useMemo(() => {
    const base = categorySlug ? products.filter((p) => p.category === categorySlug) : products
    return [...new Set(base.flatMap((p) => p.colors))]
  }, [categorySlug])

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (categorySlug && p.category !== categorySlug) return false
      if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
      if (selectedColors.length > 0 && !selectedColors.some((c) => p.colors.includes(c)))
        return false
      return true
    })
  }, [categorySlug, searchTerm, selectedColors])

  function toggleColor(color) {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    )
  }

  return (
    <section className="section shop-page">
      <div className="container">
        <div className="shop-header">
          <p className="eyebrow">Loja</p>
          <h1>{activeCategory ? activeCategory.name : 'Todos os produtos'}</h1>
          {searchTerm && (
            <p className="shop-search-note">Resultados para “{searchTerm}”</p>
          )}
        </div>

        <div className="category-chips">
          <Link to="/loja" className={!categorySlug ? 'is-active' : ''}>
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/loja/${cat.slug}`}
              className={categorySlug === cat.slug ? 'is-active' : ''}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {availableColors.length > 0 && (
          <div className="color-chips">
            <span className="color-chips-label">Cor:</span>
            {availableColors.map((color) => (
              <button
                key={color}
                className={selectedColors.includes(color) ? 'is-active' : ''}
                onClick={() => toggleColor(color)}
              >
                {color}
              </button>
            ))}
            {selectedColors.length > 0 && (
              <button className="color-chips-clear" onClick={() => setSelectedColors([])}>
                Limpar
              </button>
            )}
          </div>
        )}

        <p className="shop-count">{filteredProducts.length} produto(s)</p>

        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  )
}
