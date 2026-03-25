import { useState } from 'react'
import { products } from '../data/products'
import { WA_NUMBER } from '../data/config'
import styles from './CartDrawer.module.css'

export default function CartDrawer({ cart, open, onClose, onUpdateCart }) {
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')

  const cartItems = products.filter(p => (cart[p.id] || 0) > 0)
  const total = cartItems.reduce((sum, p) => sum + p.price * cart[p.id], 0)

  const handleOrder = () => {
    if (cartItems.length === 0) return

    let msg = '¡Hola! Me gustaría hacer un pedido 🥐\n\n'
    msg += '*PEDIDO:*\n'
    cartItems.forEach(p => {
      msg += `• ${cart[p.id]}x ${p.name} — $${(p.price * cart[p.id]).toLocaleString('es-UY')}\n`
    })
    msg += `\n*Total: $${total.toLocaleString('es-UY')}*`
    if (name.trim()) msg += `\n\n*Nombre:* ${name.trim()}`
    if (notes.trim()) msg += `\n*Notas:* ${notes.trim()}`

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <>
      {open && <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />}

      <aside
        className={`${styles.drawer} ${open ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Tu pedido"
      >
        <div className={styles.header}>
          <h3 className={styles.title}>
            Tu pedido
            {cartItems.length > 0 && (
              <span className={styles.count}>{cartItems.length}</span>
            )}
          </h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar carrito">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          {cartItems.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🥐</span>
              <p className={styles.emptyText}>Tu carrito está vacío</p>
              <p className={styles.emptySub}>Agregá productos desde la tienda</p>
              <button className={styles.browseBtn} onClick={onClose}>
                Ver productos
              </button>
            </div>
          ) : (
            <>
              <ul className={styles.itemList}>
                {cartItems.map(p => (
                  <li key={p.id} className={styles.item}>
                    <div className={styles.itemInfo}>
                      <span className={styles.itemName}>{p.name}</span>
                      <span className={styles.itemUnit}>{p.unit}</span>
                    </div>
                    <div className={styles.itemControls}>
                      <div className={styles.qtyCtrl}>
                        <button
                          onClick={() => onUpdateCart(p.id, cart[p.id] - 1)}
                          aria-label="Quitar uno"
                        >
                          −
                        </button>
                        <span>{cart[p.id]}</span>
                        <button
                          onClick={() => onUpdateCart(p.id, cart[p.id] + 1)}
                          aria-label="Agregar uno"
                        >
                          +
                        </button>
                      </div>
                      <span className={styles.itemPrice}>
                        ${(p.price * cart[p.id]).toLocaleString('es-UY')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.totalAmt}>${total.toLocaleString('es-UY')}</span>
              </div>

              <div className={styles.form}>
                <p className={styles.formNote}>
                  Confirmamos disponibilidad y coordinamos la entrega por WhatsApp.
                </p>

                <label className={styles.label}>
                  Tu nombre
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="¿Cómo te llamás?"
                    className={styles.input}
                  />
                </label>

                <label className={styles.label}>
                  Notas del pedido
                  <textarea
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Aclaraciones, dirección tentativa, etc. (opcional)"
                    className={styles.textarea}
                    rows={3}
                  />
                </label>
              </div>

              <button className={styles.waBtn} onClick={handleOrder}>
                <WaIcon />
                Enviar pedido por WhatsApp
              </button>
            </>
          )}
        </div>
      </aside>
    </>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
