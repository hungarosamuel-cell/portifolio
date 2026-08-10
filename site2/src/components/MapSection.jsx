import { mapCoordinates } from '../data/business'
import '../styles/MapSection.css'

function MapSection() {
  const { lat, lng } = mapCoordinates
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`
  const mapLink = `https://www.google.com/maps?q=${lat},${lng}`

  return (
    <section id="mapa" className="section map">
      <div className="container">
        <h2 className="section-title">
          Nossa <span className="highlight">Localização</span>
        </h2>
        <p className="section-subtitle">
          Venha nos visitar! Estamos te esperando com o melhor lanche da cidade.
        </p>

        <div className="map__frame">
          <iframe
            title="Localização da Bruto Smash no Google Maps"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="map__footer">
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

export default MapSection
