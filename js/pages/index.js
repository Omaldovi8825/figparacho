// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue
import { eventos } from "../eventos.js"
import { organizadores } from "../organizadores.js"
import { AcordeonPanel } from "../components/AcordeonPanel.js"
import { EventoCard } from "../components/EventoCard.js"
import { OrganizadorCard } from "../components/OrganizadorCard.js"

const estelares = eventos
  .filter(({ tipo }) => tipo === "estelar")
  .sort((a, b) => a.fecha - b.fecha)

const vespertinas = eventos
  .filter(({ tipo }) => tipo === "vespertino")
  .sort((a, b) => a.fecha - b.fecha)

createApp({
  components: {
    AcordeonPanel,
    EventoCard,
    OrganizadorCard,
  },
  data() {
    return {
      eventos: {
        estelares,
        vespertinas
      },
      organizadores,
      idPanel: "main",
    }
  },
}).mount("#app")
