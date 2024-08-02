import { Concierto } from "../clases.js"
import { angelS } from "../artistas/angelS.js"

export const cAngelS = new Concierto(
  1,
  null,
  4,
  "20:00",
  null,
  [angelS],
  /*html*/ `
    <p>Tombeau sur la mort de M. Comte de Logy, Sylvius Leopold Weiss (1687 – 1750)</p>
    <p>Suite Española No.1, Op. 47 – V. Asturias, Isaac Albeniz (1860 – 1909)</p>
    <p>Etude No. 8 (Allegretto con motto), Giulio Regondi (1822 – 1872)</p>
    <p>Fantasía Húngara, Johann Kaspar Mertz (1806 – 1856)</p>
    <p class="text-center fw-bold">Intermedio</p>
    <p>Julia Florida (Barcarola), Agustín Barrios (1885 – 1944)</p>
    <p>Toccata de Pasquini, Leo Brouwer (1939) </p>
    <p>Dos piezas Brasileñas:</p>
    <ul>
      <li>Se ela perguntar, Dilermando Reis (1916 – 1977)</li>
      <li>Passeio No Rio, Luiz Bonfá (1922 – 2001)</li>
    </ul>
    <p>Sonata Op. 47, Alberto Ginastera (1916 – 1983)</p>
    <ul>
      <li>I. Esordio</li>
      <li>II. Scherzo</li>
      <li>III. Canto</li>
      <li>IV. Finale </li>
    </ul>
  `,
  "estelar"
)
