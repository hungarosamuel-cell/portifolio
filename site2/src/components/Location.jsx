import { mapCoordinates } from '../data/business'
import '../styles/Location.css'

function Location() {
  const { lat, lng } = mapCoordinates
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
  const mapLink = `https://www.google.com/maps?q=${lat},${lng}`

  return (
    <section id="localizacao" className="section location">
      <div className="container location__inner">
        <span className="section-kicker">Localização</span>
        <h2 className="section-title">Venha nos visitar</h2>

        <div className="location__frame">
          <iframe
            title="Localização da BrutoSmash no Google Maps"
            src={mapSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary location__cta">
          Abrir no Google Maps
        </a>
      </div>
    </section>
  )
}

export default Location
