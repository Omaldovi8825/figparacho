import { Concierto } from "../clases.js"
import { pabloG } from "../artistas/pabloG.js"

export const cPabloG = new Concierto(
  3,
  null,
  6,
  "20:00",
  null,
  [pabloG],
  /*html*/ `
    <p>Il Travatore Op. 8 No 27, Johann Kaspar Mertz (1806-1856)</p>
    <p>Quatrè pièces brèves, Franck Martin (1890-1974)</p>
    <ul>
      <li>Prelude</li>
      <li>Aria</li>
      <li>Plainté</li>
      <li>Comme un gigue</li>
    </ul>
    <p>
      Selección de los XXIV Carpichos de Goya, Mario Castelnuovo
      Tedesco (1895-1968)
    </p>
    <ul>
      <li>Francisco Goya y lucientes</li>
      <li>Obsequio al maestro</li>
      <li>Dios la perdone y era su madre</li>
      <li>No hubo remedio</li>
    </ul>
    <p>Sonata Op. 47, Alberto Ginastera (1916-1983)</p>
    <ul>
      <li>Esordio</li>
      <li>Scherzo</li>
      <li>Canto</li>
      <li>Final</li>
    </ul>
  `,
  "estelar"
)
