import { menuItems } from '../data/menu'
import '../styles/Menu.css'

function Menu() {
  return (
    <section id="cardapio" className="section menu">
      <div className="container">
        <span className="section-kicker">Cardápio</span>
        <h2 className="section-title">Feito na chapa, na hora do seu pedido</h2>
        <p className="section-subtitle">
          Ingredientes frescos, pão brioche tostado e o ponto certo de suculência.
        </p>

        <div className="menu__grid">
          {menuItems.map((item) => (
            <article key={item.id} className="menu__card">
              <div className="menu__photo">
                <img src={item.image} alt={item.name} className="menu__photo-img" />
                {item.tag && <span className="menu__tag">{item.tag}</span>}
              </div>
              <div className="menu__body">
                <h3 className="menu__name">{item.name}</h3>
                <p className="menu__description">{item.description}</p>
                <span className="menu__price">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
