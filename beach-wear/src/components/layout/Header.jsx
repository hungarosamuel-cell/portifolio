import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { categories } from '../../data/categories'
import { useCart } from '../../context/CartContext'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { itemCount, openCart } = useCart()
  const navigate = useNavigate()

  function handleSearchSubmit(event) {
    event.preventDefault()
    if (!query.trim()) return
    navigate(`/loja?busca=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="site-header">
      <div className="announce-bar">
        Frete grátis a partir de R$400 · Em até 5x sem juros
      </div>

      <div className="container header-row">
        <button
          className="icon-btn menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          LUMINA <span>RIO</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <NavLink
                  to={`/loja/${cat.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/loja" onClick={() => setMenuOpen(false)}>
                Ver tudo
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Buscar"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <SearchIcon />
          </button>
          <button className="icon-btn" aria-label="Carrinho" onClick={openCart}>
            <CartIcon />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      </div>

      {searchOpen && (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <div className="container search-bar-inner">
            <SearchIcon />
            <input
              type="search"
              autoFocus
              placeholder="Buscar produtos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      )}
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6L4.5 2H2" />
      <circle cx="9.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="20" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
