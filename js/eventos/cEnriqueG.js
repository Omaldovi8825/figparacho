import { Concierto } from "../clases.js"
import { enriqueG } from "../artistas/enriqueG.js"

export const cEnriqueG = new Concierto(
  8,
  null,
  8,
  "16:00",
  null,
  [enriqueG],
  /*html*/ `
    <p>Estudio no. 5 (ostinato), Cutberto C. Tapia (1983)</p>
    <p>Suite venezolana, Antonio Lauro (1917-1986)</p>
    <ul>
      <li>I. Registro (preludio)</li>
      <li>II. Danza negra</li>
      <li>III. Canción</li>
      <li>IV. Vals</li>
    </ul>
    <p>Introducción y variaciones sobre un tema de Mozart Op. 9 (la flauta mágica), Fernando Sor (1778-1839)</p>
    <p>Tema variado y final, Manuel M. Ponce (1882- 1948)</p>
    <p>Sonatina Libra, Roland Dyens (1955-2016)</p>
    <ul>
      <li>I. India</li>
      <li>II. Largo</li>
      <li>III. Fuoco</li>
    </ul>
  `,
  "vespertino"
)
