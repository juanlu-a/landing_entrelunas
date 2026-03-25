import { products } from '../data/products'
import ProductCard from './ProductCard'
import styles from './Shop.module.css'

export default function Shop({ cart, onUpdateCart }) {
  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0)

  return (
    <section id="tienda" className={styles.shop}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Tienda</span>
          <h2 className={styles.title}>Nuestras medialunas</h2>
          <p className={styles.subtitle}>
            Elaboradas con ingredientes seleccionados, horneadas con amor.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onUpdate={(qty) => onUpdateCart(product.id, qty)}
            />
          ))}
        </div>

        {totalItems > 0 && (
          <div className={styles.notice}>
            <span className={styles.noticeIcon}>🌙</span>
            <p>
              ¡Genial! Cuando termines de elegir, abrí el carrito para confirmar tu pedido por WhatsApp.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
