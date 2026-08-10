import { FaCamera } from 'react-icons/fa'
import '../styles/ImagePlaceholder.css'

function ImagePlaceholder({ src, alt, label = 'Adicione uma foto', className = '' }) {
  if (src) {
    return <img src={src} alt={alt} className={`image-placeholder__img ${className}`} />
  }

  return (
    <div className={`image-placeholder ${className}`}>
      <FaCamera className="image-placeholder__icon" />
      <span className="image-placeholder__label">{label}</span>
    </div>
  )
}

export default ImagePlaceholder
