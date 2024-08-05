import { Concierto } from "../clases.js"
import { duoMozquedaUlate } from "../artistas/duoMozquedaUlate.js"

export const cDuoMozquedaUlate = new Concierto(
  11,
  "Dúo Mozqueda - Ulate",
  8,
  "20:00",
  "duoMozquedaUlate1.jpeg",
  [duoMozquedaUlate],
  /*html*/ `
    <p>Joan Sebastian Bach</p>
    <ul>
      <li>Suite BMV 995</li>
      <ul>
        <li>Preludio</li>
        <li>Alemanda</li>
        <li>Sarabanda</li>
        <li>Courant</li>
      </ul>
    </ul>
    <p>Dos canciones mexicanas (arr. Roque Carbajo)</p>
    <ul>
      <li>Adiós mi chaparrita</li>
      <li>La valentina</li>
    </ul>
    <p class="text-center fw-bold">Flauta y guitarra</p>
    <p>Mario Castelnuovo Tedesco</p>
    <ul>
      <li>Sonatina para flauta y guitarra</li>
      <ul>
        <li>Allegro Grazioso</li>
        <li>Tempo de Siciliana</li>
        <li>Scherzo - Rondo</li>
      </ul>
    </ul>
    <p>Astor Piazzolla</p>
    <ul>
      <li>Historia del tango</li>
      <ul>
        <li>Bordel 1900</li>
        <li>Café 1930</li>
        <li>Nightclub 1960</li>
      </ul>
    </ul>
 `,
  "estelar"
)
