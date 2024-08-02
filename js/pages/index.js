// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue
import { eventos } from "../eventos.js"
import { organizadores } from "../organizadores.js"
import { AcordeonPanel } from "../components/AcordeonPanel.js"
import { EventoCard } from "../components/EventoCard.js"
import { OrganizadorCard } from "../components/OrganizadorCard.js"
import { MainMenu } from "../components/Menu.js"

const estelares = eventos
  .filter(({ tipo }) => tipo === "estelar")
  .sort((a, b) => a.fecha - b.fecha)

const vespertinas = eventos
  .filter(({ tipo }) => tipo === "vespertino")
  .sort((a, b) => a.fecha - b.fecha)

const extension = eventos.find(({ tipo }) => tipo === "extension")

const lugarEvento = {
  template: /*html*/ `
    <div class="col-12 mb-3">
      <p class="mb-0 fw-bold">
        Lugar:
        <a
          :href="link"
          class="color2"
          target="_blank"
          >{{ nombre }}
          <i class="bi bi-geo-fill"></i>
        </a>
      </p>
    </div>
  `,
  props: ["nombre", "link"],
}

createApp({
  components: {
    MainMenu,
    AcordeonPanel,
    EventoCard,
    OrganizadorCard,
    lugarEvento,
  },
  data() {
    return {
      eventos: {
        estelares,
        vespertinas,
        extension,
      },
      organizadores,
      idPanel: "main",
    }
  },
}).mount("#app")
