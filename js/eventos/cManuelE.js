import { Concierto } from "../clases.js"
import { manuelE } from "../artistas/manuelE.js"

export const cManuelE = new Concierto(
  4,
  null,
  7,
  "20:00",
  null,
  [manuelE],
  /*html*/ `
    <p>Sonata K.208, Domenico Scarlatti (transc. Leo Brouwer)</p>
    <p>Sonata No.74, Carlos Seixas (transc. Javier Hinojosa)</p>
    <p>Suite BWV 995, Juan Sebastian Bach (transc. Eduardo Fernández)</p>
    <ul>
      <li>Prelude</li>
      <li>Allemande</li>
      <li>Courante</li>
      <li>Sarabande</li>
      <li>Gavotte I</li>
      <li>Gavotte II (en Rondeau)</li>
      <li>Gigue</li>
    </ul>
    <p class="text-center fw-bold">Intermedio</p>
    <p>El decamerón negro, Leo Brouwer</p>
    <ul>
      <li>El arpa del guerrero</li>
      <li>Huida de los amantes por el vale de los ecos</li>
      <li>Balada de la doncella enamorada</li>
    </ul>
    <p>Sonata No. 1, Leo Brouwer</p>
    <ul>
      <li>Fandangos y boleros</li>
      <li>Sarbanda de Scriabin</li>
      <li>Tocata de Pasquini</li>
    </ul>
  `,
  "estelar"
)
