import { Sede } from "./clases.js"

const cideg = new Sede(
  1,
  "Auditorio del CIDEG",
  "https://maps.app.goo.gl/RW3sV7Bgy11JVVzU8",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.562676141329!2d-102.047068!3d19.6459858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842dd8c9b165110b%3A0x51d4dfb24f5edfec!2sCIDEG!5e0!3m2!1ses-419!2smx!4v1722574554205!5m2!1ses-419!2smx"
)

const salaLopezRamos = new Sede(
  2,
  "Sala Manuel López Ramos",
  "https://maps.app.goo.gl/KiidNBthf5EzAVeWA",
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30059.817943398928!2d-102.0671652!3d19.6496346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842dd9bb7749bcfd%3A0x107655ddaddd9e61!2zU2FsYSDCqyBNYW51ZWwgTMOzcGV6IFJhbW9zIMK7!5e0!3m2!1ses-419!2smx!4v1722575105350!5m2!1ses-419!2smx"
)

const conservatorioCupatitzio = new Sede(
  3,
  "Conservatorio del Cupatitzio",
  "https://maps.app.goo.gl/8PckW9Ao7Bs9f5Vo6",
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30105.26183813709!2d-102.0660843!3d19.4055898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842de35acfd598e5%3A0xb6dac3d30c7fa5fb!2sConservatorio%20del%20Cupatitzio!5e0!3m2!1ses-419!2smx!4v1722575249648!5m2!1ses-419!2smx"
)

export const sedes = [cideg, salaLopezRamos, conservatorioCupatitzio]
