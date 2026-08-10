import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { whatsappLink } from '../data/business'
import '../styles/Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  const { pathname } = useLocation()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          Bruto<span className="highlight">Smash</span>
        </span>

        {pathname !== '/sobre' && (
          <Link to="/sobre" className="footer__link">
            Conheça nossa história →
          </Link>
        )}

        <div className="footer__socials">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>

        <p className="footer__copy">© {year} BrutoSmash. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
