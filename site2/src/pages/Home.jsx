import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Location from '../components/Location'
import Footer from '../components/Footer'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default Home
