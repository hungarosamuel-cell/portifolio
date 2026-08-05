import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/format'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside className={`cart-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-drawer-header">
          <h2>Seu carrinho</h2>
          <button className="icon-btn" onClick={closeCart} aria-label="Fechar carrinho">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Seu carrinho está vazio.</p>
            <Link to="/loja" className="btn btn-primary" onClick={closeCart}>
              Ver produtos
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.key} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-meta">
                      {item.color} · {item.size}
                    </p>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.key, item.quantity - 1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.key, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-side">
                    <span className="cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeItem(item.key)}
                      aria-label="Remover item"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-drawer-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className="cart-shipping-note">Frete e parcelamento calculados no checkout.</p>
              <Link to="/carrinho" className="btn btn-outline btn-block" onClick={closeCart}>
                Ver carrinho
              </Link>
              <Link to="/checkout" className="btn btn-primary btn-block" onClick={closeCart}>
                Finalizar compra
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
