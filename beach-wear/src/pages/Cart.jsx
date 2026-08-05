import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import './Cart.css'

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <section className="section cart-page">
        <div className="container cart-empty-state">
          <h1>Seu carrinho está vazio</h1>
          <p>Explore a coleção e encontre a próxima peça favorita.</p>
          <Link to="/loja" className="btn btn-primary">
            Ver produtos
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section cart-page">
      <div className="container">
        <h1>Carrinho</h1>

        <div className="cart-page-grid">
          <ul className="cart-page-items">
            {items.map((item) => (
              <li key={item.key} className="cart-page-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-page-item-info">
                  <p className="cart-page-item-name">{item.name}</p>
                  <p className="cart-page-item-meta">
                    {item.color} · {item.size}
                  </p>
                  <button className="cart-page-item-remove" onClick={() => removeItem(item.key)}>
                    Remover
                  </button>
                </div>
                <div className="cart-page-item-qty">
                  <button onClick={() => updateQuantity(item.key, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.key, item.quantity + 1)}>+</button>
                </div>
                <span className="cart-page-item-price">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <aside className="cart-summary">
            <h2>Resumo</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Frete</span>
              <span>{subtotal >= 400 ? 'Grátis' : 'Calculado no checkout'}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-block">
              Finalizar compra
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
