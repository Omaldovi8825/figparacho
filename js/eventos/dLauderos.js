import { Lauderos } from "../clases.js"
import { nataliaT } from "../artistas/nataliaT.js"

export const dLauderos = new Lauderos(
  10,
  "Dinámica con lauderos",
  "6 al 8",
  "10:00",
  "dLauderos.jpg",
  [nataliaT],
  /*html*/ `
    <p>Un espacio para resaltar el trabajo de los lauderos, en donde podrán mostrar sus guitarras de la forma más elegante y atractiva, a través del que se podrán incluir los detalles técnicos y artísticos más destacados del instrumento y de su legado como constructores. Posteriormente se difundirá su trabajo a nivel Nacional e Internacional a través de nuestra página Web y todos los medios digitales disponibles del Festival de Guitarra de Paracho 2024</p>
    <p>El encuentro se llevará a cabo los días, 6, 7 y 8 de agosto, en la Sala Manuel López Ramos. Las pruebas en vivo del instrumento se llevarán a cargo de la Mtra. Natalia Tarquino guitarrista colombiana, junto con la entrevista para la elaboración de la reseña artística y biografía de la trayectoria de los lauderos.</p>
  `,
  "matutino"
)
