import { INSTAGRAM } from '../data/config'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotras" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.topAccent} />

        <span className={styles.badge}>Nuestra historia</span>

        <h2 className={styles.title}>
          Hechas con pasión,<br />
          <em>para compartir</em>
        </h2>

        <div className={styles.story}>
          <p>
            Siempre amé cocinar. Es mi lugar, mi refugio, mi pasión. Pero durante mucho tiempo
            no me animé a convertirlo en trabajo por miedo a que, al transformarlo en obligación,
            la magia se apagara.
          </p>
          <p>
            Este verano, como todos los años, me tocó preparar la merienda para la barra en Playa
            Verde. Era una tarde de lluvia y quise innovar. Decidí hacer medialunas.
            Nunca antes las había hecho.
          </p>
          <p>
            Desaparecieron en minutos. Al día siguiente llegaron los elogios, los pedidos…
            y las ganas de repetir.
          </p>
          <p>
            Fue entonces cuando entendí: compartir mi amor por la cocina no apaga mi pasión,
            la impulsa a crecer. Ver cómo otros disfrutan de lo que crean mis manos fue el
            empujón que necesitaba.
          </p>
          <p>
            Con el apoyo de mi familia y mis amigos, y después de años soñando con esto, decidí
            lanzarme al agua. Pero no lo hago sola: lo hago junto a Santi, con su compañía
            y su entusiasmo incondicional.
          </p>

          <blockquote className={styles.quote}>
            Así nace Entre Lunas: para acompañar tus momentos, entre mates, entre charlas,
            entre amigos y entre familia.
          </blockquote>
        </div>

        <div className={styles.signature}>
          <img src="/assets/logo.JPG" alt="Entre Lunas" className={styles.sigLogo} />
          <div>
            <p className={styles.sigName}>Entre Lunas</p>
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sigHandle}
            >
              @{INSTAGRAM}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
