import { Concierto } from "../clases.js"
import { alexaA } from "../artistas/alexaN.js"
import { alfonsoF } from "../artistas/alfonsoF.js"
import { alfredoA } from "../artistas/alfredoA.js"

export const cAlumnosCupatitzio = new Concierto(
  9,
  "Concierto de alumnos",
  8,
  "17:00",
  "alumnosCupatitzio.jpg",
  [alexaA, alfonsoF, alfredoA],
  null,
  "extension"
)
