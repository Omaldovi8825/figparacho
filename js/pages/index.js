// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue
import { eventos } from "../eventos.js"
import { organizadores } from "../organizadores.js"
import { sedes } from "../sedes.js"
import { AcordeonPanel } from "../components/AcordeonPanel.js"
import { EventoCard } from "../components/EventoCard.js"
import { OrganizadorCard } from "../components/OrganizadorCard.js"
import { MainMenu } from "../components/Menu.js"
import { CopyRight } from "../components/Copyright.js"
import { LugarEvento } from "../components/LugarEvento.js"

const estelares = eventos
  .filter(({ tipo }) => tipo === "estelar")
  .sort((a, b) => a.fecha - b.fecha)
const vespertinos = eventos
  .filter(({ tipo }) => tipo === "vespertino")
  .sort((a, b) => a.fecha - b.fecha)

const extension = eventos.find(({ tipo }) => tipo === "extension")

createApp({
  components: {
    MainMenu,
    AcordeonPanel,
    EventoCard,
    OrganizadorCard,
    LugarEvento,
    CopyRight,
  },
  data() {
    return {
      eventos: {
        conciertos: {
          estelares,
          vespertinos,
          extension,
        },
      },
      organizadores,
      sedes,
      idPanel: "main",
    }
  },
}).mount("#app")
