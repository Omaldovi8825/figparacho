export class Evento {
  constructor(id, img, artista, pais, fecha, hora, programa, cv, tipo) {
    this.id = id
    this.img = img
    this.artista = artista
    this.pais = pais
    this.fecha = fecha
    this.hora = hora
    this.programa = programa
    this.cv = cv
    this.tipo = tipo
  }
}

export class Organizador {
  constructor(id, nombre, img, cv) {
    this.id = id
    this.nombre = nombre
    this.img = img
    this.cv = cv
  }
}

