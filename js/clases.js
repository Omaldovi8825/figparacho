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

export class Convocatoria {
  constructor(
    id,
    nombre,
    limiteEdad,
    categoriaAnterior,
    fases,
    premios,
    inscripcion,
    sorteo
  ) {
    this.id = id
    this.nombre = nombre
    this.limiteEdad = limiteEdad
    this.categoriaAnterior = categoriaAnterior
    this.fases = fases
    this.premios = premios
    this.inscripcion = inscripcion
    this.sorteo = sorteo
  }
}

export class Sede {
  constructor(id, nombre, link, iFrame) {
    this.id = id
    this.nombre = nombre
    this.link = link
    this.iFrame = iFrame
  }
}
