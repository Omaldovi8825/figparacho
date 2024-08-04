import { Concierto } from "../clases.js"
import { alfredoA } from "../artistas/alfredoA.js"

export const cAlfredoA = new Concierto(
  12,
  "Recital - presentación Sonatina",
  7,
  "17:30",
  null,
  [alfredoA],
  /*html*/ `
    <p><i>*Presentación de productos Sonatina</i></p>
    <hr>
    <p>Agustín Barrios Mangoré  (1985 - 1944)</p>
    <ul>
      <li>Un Sueño en la Floresta</li>
    </ul>
    <p>Jeremy Collins (1981)</p>
    <ul>
      <li>Elegy</li>
    </ul>
    <p>Tilman Hoppstock (1961)</p>
    <ul>
      <li>Variaciones sobre un Tema de Debussy</li>
    </ul>
    <p>Vicente Asencio (1908 - 1979)</p>
    <ul>
      <li>Collectici Íntim</li>
      <ul>
        <li>La Serenor</li>
        <li>La joia</li>
        <li>La Calma</li>
        <li>La Gaubança</li>
        <li>La Frisança</li>
      </ul>
    </ul>
    <p>Astor Piazzolla (1921-1992)</p>
    <ul>
      <li>Invierno Porteño (transcripción de Sergio Assad)</li>
    </ul>
    <p>Roland Dyens (1954 - 2016)</p>
    <ul>
      <li>Sonatina Libra</li>
      <ul>
        <li>Largo</li>
        <li>Fuoco</li>
      </ul>
    </ul>
  `,
  "vespertino"
)
