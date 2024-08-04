export class Artista {
  constructor(id, img, nombre, pais, cv, programa) {
    this.id = id
    this.img = img
    this.nombre = nombre
    this.pais = pais
    this.cv = cv
    this.programa = programa
  }
}

export class Evento {
  constructor(id, nombre, fecha, hora, img, verMas) {
    this.id = id
    this.nombre = nombre
    this.fecha = fecha
    this.hora = hora
    this.img = img
    this.verMas = verMas
  }
}

export class Concierto extends Evento {
  constructor(
    id,
    nombre,
    fecha,
    hora,
    img,
    artistas,
    programa,
    tipo,
    verMas = true
  ) {
    super(id, nombre, fecha, hora, img, verMas)
    this.artistas = artistas
    this.programa = programa
    this.tipo = tipo
  }
}

export class Lauderos extends Evento {
  constructor(
    id,
    nombre,
    fecha,
    hora,
    img,
    artistas,
    programa,
    tipo,
    verMas = true
  ) {
    super(id, nombre, fecha, hora, img, verMas)
    this.artistas = artistas
    this.programa = programa
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
