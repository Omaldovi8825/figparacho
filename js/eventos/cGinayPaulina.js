import { Concierto } from "../clases.js"
import { ginaA } from "../artistas/ginaA.js"
import { paulinaM } from "../artistas/paulinaM.js"

export const cGinaYPaulina = new Concierto(
  7,
  "Gina y Paulina",
  7,
  "16:00",
  "ginaYpaulina.jpg",
  [paulinaM, ginaA],
  null,
  "vespertino"
)
