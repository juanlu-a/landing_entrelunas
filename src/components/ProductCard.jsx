import styles from './ProductCard.module.css'

export default function ProductCard({ product, quantity, onUpdate }) {
  return (
    <article className={`${styles.card} ${product.highlight ? styles.highlight : ''}`}>
      {product.highlight && (
        <span className={styles.highlightBadge}>Más elegida</span>
      )}

      <div className={styles.iconWrap}>
        <span className={styles.icon} aria-hidden="true">🥐</span>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.unit}>{product.unit}</p>
        <p className={styles.description}>{product.description}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.price}>
          <span className={styles.priceCurrency}>$</span>
          {product.price}
        </span>

        {quantity === 0 ? (
          <button className={styles.addButton} onClick={() => onUpdate(1)}>
            Agregar
          </button>
        ) : (
          <div className={styles.qty}>
            <button
              className={styles.qtyBtn}
              onClick={() => onUpdate(quantity - 1)}
              aria-label="Quitar una unidad"
            >
              −
            </button>
            <span className={styles.qtyNum}>{quantity}</span>
            <button
              className={styles.qtyBtn}
              onClick={() => onUpdate(quantity + 1)}
              aria-label="Agregar una unidad"
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  )
}
