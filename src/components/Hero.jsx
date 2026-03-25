import { useState, useEffect, useCallback } from 'react'
import styles from './Hero.module.css'

const slides = [
  { src: '/assets/1.JPG', alt: 'Caja de medialunas artesanales de Entre Lunas' },
  { src: '/assets/2.JPG', alt: 'Medialunas recién horneadas, doradas y esponjosas' },
  { src: '/assets/3.JPG', alt: 'Medialunas listas para compartir' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 500)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className={styles.hero}>
      {/* Carousel images */}
      <div className={styles.carousel}>
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            aria-hidden={i !== current}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Hero content */}
      <div className={styles.content}>
        <img src="/assets/logo.JPG" alt="Entre Lunas" className={styles.logo} />
        <p className={styles.tagline}>Medialunas artesanales · Montevideo</p>
        <a href="#tienda" className={styles.cta}>
          Ver productos
        </a>
      </div>

      {/* Slide dots */}
      <div className={styles.dots} role="tablist" aria-label="Imágenes del carrusel">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ver imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <a href="#nosotras" className={styles.scrollDown} aria-label="Ir a nuestra historia">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
