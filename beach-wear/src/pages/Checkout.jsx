import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import './Checkout.css'

const initialForm = {
  name: '',
  email: '',
  cep: '',
  address: '',
  number: '',
  city: '',
  state: '',
  payment: 'cartao',
}

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [orderId, setOrderId] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const id = `LR-${Math.floor(1000 + (subtotal * 7) % 9000)}`
    setOrderId(id)
    clearCart()
  }

  if (orderId) {
    return (
      <section className="section checkout-page">
        <div className="container checkout-success">
          <h1>Pedido recebido 🌊</h1>
          <p>
            Obrigado, {form.name.split(' ')[0] || 'cliente'}! Seu pedido{' '}
            <strong>#{orderId}</strong> foi registrado.
          </p>
          <p className="checkout-success-note">
            Este é um site de demonstração — nenhum pagamento real foi processado.
          </p>
          <Link to="/" className="btn btn-primary">
            Voltar para a loja
          </Link>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return <Navigate to="/loja" replace />
  }

  return (
    <section className="section checkout-page">
      <div className="container checkout-grid">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h1>Checkout</h1>

          <fieldset>
            <legend>Contato</legend>
            <label>
              Nome completo
              <input name="name" required value={form.name} onChange={handleChange} />
            </label>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Endereço de entrega</legend>
            <div className="field-row">
              <label>
                CEP
                <input name="cep" required value={form.cep} onChange={handleChange} />
              </label>
              <label>
                Número
                <input name="number" required value={form.number} onChange={handleChange} />
              </label>
            </div>
            <label>
              Endereço
              <input name="address" required value={form.address} onChange={handleChange} />
            </label>
            <div className="field-row">
              <label>
                Cidade
                <input name="city" required value={form.city} onChange={handleChange} />
              </label>
              <label>
                Estado
                <input name="state" required value={form.state} onChange={handleChange} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Pagamento</legend>
            <div className="payment-options">
              {[
                { value: 'cartao', label: 'Cartão de crédito' },
                { value: 'pix', label: 'Pix' },
                { value: 'boleto', label: 'Boleto' },
              ].map((opt) => (
                <label key={opt.value} className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value={opt.value}
                    checked={form.payment === opt.value}
                    onChange={handleChange}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            <p className="checkout-payment-note">
              Ambiente de demonstração: nenhuma cobrança real será feita.
            </p>
          </fieldset>

          <button type="submit" className="btn btn-primary btn-block">
            Confirmar pedido — {formatPrice(subtotal)}
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Resumo do pedido</h2>
          <ul>
            {items.map((item) => (
              <li key={item.key}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <span>
                    {item.color} · {item.size} · Qtd {item.quantity}
                  </span>
                </div>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </li>
            ))}
          </ul>
          <div className="checkout-summary-total">
            <span>Total</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
        </aside>
      </div>
    </section>
  )
}
