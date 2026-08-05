import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from '../cart/CartDrawer'

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
