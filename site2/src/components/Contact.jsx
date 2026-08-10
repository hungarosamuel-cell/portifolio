import { FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { businessHours, whatsappLink } from '../data/business'
import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <span className="section-kicker">Contato</span>
        <h2 className="section-title">Fale com a gente</h2>

        <div className="contact__grid">
          <div className="contact__card">
            <FaClock className="contact__icon" />
            <h3>Horário</h3>
            <ul className="contact__hours">
              {businessHours.map((item) => (
                <li key={item.day}>
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact__card">
            <FaWhatsapp className="contact__icon" />
            <h3>Faça seu pedido</h3>
            <p>Chama no WhatsApp e peça seu lanche favorito agora.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              (44) 99137-7145
            </a>
          </div>

          <div className="contact__card">
            <FaMapMarkerAlt className="contact__icon" />
            <h3>Onde estamos</h3>
            <p>Confira a localização exata logo abaixo.</p>
            <a href="#localizacao" className="btn btn--secondary">
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
