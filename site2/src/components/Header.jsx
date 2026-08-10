import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data/business'
import '../styles/Header.css'

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Cardápio', to: '/#cardapio' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/#contato' },
  { label: 'Localização', to: '/#localizacao' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          Bruto<span className="highlight">Smash</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`header__nav-link ${location.pathname === link.to ? 'header__nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary header__cta">
            <FaWhatsapp /> Peça agora
          </a>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="header__mobile-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--block">
            Peça no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
