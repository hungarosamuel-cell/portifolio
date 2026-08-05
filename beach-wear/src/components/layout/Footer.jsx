import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event) {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="brand-mark">
            LUMINA <span>RIO</span>
          </p>
          <p className="footer-story">
            Moda praia pensada para o litoral brasileiro: tecidos leves, caimento pensado
            para o corpo em movimento e peças que atravessam do areal ao fim de tarde.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Categorias</h3>
          <ul>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/loja/${cat.slug}`}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Ajuda</h3>
          <ul>
            <li>
              <Link to="/loja">Trocas e devoluções</Link>
            </li>
            <li>
              <Link to="/loja">Guia de tamanhos</Link>
            </li>
            <li>
              <Link to="/loja">Frete e entregas</Link>
            </li>
            <li>
              <Link to="/loja">Fale conosco</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h3>Fique por dentro</h3>
          <p>Novidades de coleção e acesso antecipado a promoções.</p>
          {subscribed ? (
            <p className="newsletter-success">Inscrição confirmada — obrigado!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-accent">
                Assinar
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} LUMINA RIO. Todos os direitos reservados.</span>
          <span className="footer-note">Site de demonstração — produtos fictícios.</span>
        </div>
      </div>
    </footer>
  )
}
