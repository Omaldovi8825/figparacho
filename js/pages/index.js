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

const estelares = eventos
  .filter(({ tipo }) => tipo === "estelar")
  .sort((a, b) => a.fecha - b.fecha)
const vespertinos = eventos
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
