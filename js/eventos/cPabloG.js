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
    <p>Leo Brouwer</p>
    <ul>
      <li>Canción de cuna</li>
      <li>Ojos brujos</li>
      <li>Elogio de la danza</li>
    </ul>
    <p>Heitor Villalobos</p>
    <ul>
      <li>Estudio I</li>
      <li>Estudio X</li>
      <li>Estudio XI</li>
    </ul>
    <p>Simone Ianarelli</p>
    <ul>
      <li>El último café juntos</li>
    </ul>
    <p>Antonio José</p>
    <ul>
      <li>Sonata para guitarra</li>
      <ul>
        <li>Allegro moderato</li>
        <li>Minueto</li>
        <li>Pavana triste</li>
        <li>Final</li>
      </ul>
    </ul>
  `,
  "estelar"
)
