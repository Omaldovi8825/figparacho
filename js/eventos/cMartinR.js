import { Concierto } from "../clases.js"
import { martinR } from "../artistas/martinR.js"

export const cMartinR = new Concierto(
  6,
  null,
  6,
  "17:30",
  null,
  [martinR],
  /*html*/ `
    <p>5 preludios, Heitor Villalobos</p>
    <p>Choro da saudade, A. Barrios Mangore </p>
    <p>Asturias, Isaac Albeniz</p>
    <p>Invierno Porteño, Astor Piazzolla</p>
    <p>Koyunbaba, Carlo Domeniconi</p>
    <ul>
      <li>I. Moderato</li>
      <li>II. Mosso</li>
      <li>III. Cantabile</li>
      <li>IV. Presto</li>
    </ul>
  `,
  "vespertino"
)
