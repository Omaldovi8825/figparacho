import { Convocatoria } from "./clases.js"

const jaimeGomez = new Convocatoria(
  1,
  "Jaime Gómez",
  13,
  "",
  {
    unica: {
      fecha: "09",
      duracion: "8 a 12",
      tiempoMaximo: 14,
    },
  },
  {
    total: {
      cifra: "16,000.00",
      texto: "Diez y seis mil",
    },
    primero: {
      cifra: "8,000.00",
      texto: "ocho mil",
    },
    segundo: {
      cifra: "5,000.00",
      texto: "cinco mil",
    },
    tercero: {
      cifra: "3,000.00",
      texto: "tres mil",
    },
  },
  {
    cuota: {
      cifra: "300.00",
      texto: "trescientos",
    },
  },
  {
    fecha: "jueves 8",
    hora: "18:00",
  }
)

const manuelMonroy = new Convocatoria(
  2,
  "Manuel Monroy",
  20,
  "Gildardo Zalapa",
  {
    eliminatoria: {
      fecha: "el lunes 5",
      duracion: "7 a 10",
      tiempoMaximo: 12,
    },
    final: {
      fecha: "martes 6",
      duracion: "16 a 20",
      tiempoMaximo: 22,
      obraMexicana: true,
    },
  },
  {
    total: {
      cifra: "34,000.00",
      texto: "Treinta y cuatro mil",
    },
    primero: {
      cifra: "20,000.00",
      texto: "veinte mil",
    },
    segundo: {
      cifra: "8,000.00",
      texto: "ocho mi",
    },
    tercero: {
      cifra: "6,000.00",
      texto: "seis mil",
    },
  },
  {
    cuota: {
      cifra: "750.00",
      texto: "Setecientos cincuenta",
    },
  },
  {
    fecha: "domingo 4",
    hora: "18:00",
  }
)

const gildardoZalapa = new Convocatoria(
  3,
  "Gildardo Zalapa",
  0,
  "Manuel Monroy",
  {
    eliminatoria: {
      fecha: "durante los días 7 y 8",
      duracion: "10 a 12",
      tiempoMaximo: 14,
    },
    final: {
      fecha: "viernes 9",
      duracion: "20 a 22",
      tiempoMaximo: 24,
      obraMexicana: false,
    },
  },
  {
    total: {
      cifra: "120,000.00",
      texto: "Ciento veinte mil",
    },
    primero: {
      cifra: "80,000.00",
      texto: "ochenta mil",
    },
    segundo: {
      cifra: "30,000.00",
      texto: "treinta mil",
    },
    tercero: {
      cifra: "10,000.00",
      texto: "diez mil",
    },
  },
  {
    cuota: {
      cifra: "1,000.00",
      texto: "Mil",
    },
  },
  {
    fecha: "martes 6",
    hora: "18:00",
  }
)

export const convocatorias = [manuelMonroy, gildardoZalapa, jaimeGomez]
