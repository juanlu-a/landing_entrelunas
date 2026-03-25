import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Shop from './components/Shop'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

export default function App() {
  // cart: { [productId]: quantity }
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  const updateCart = (productId, quantity) => {
    setCart(prev => {
      if (quantity <= 0) {
        const next = { ...prev }
        delete next[productId]
        return next
      }
      return { ...prev, [productId]: quantity }
    })
  }

  return (
    <>
      <Navbar cartCount={totalItems} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <About />
        <Shop cart={cart} onUpdateCart={updateCart} />
        <FAQ />
      </main>

      <Footer />

      <CartDrawer
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateCart={updateCart}
      />
    </>
  )
}
