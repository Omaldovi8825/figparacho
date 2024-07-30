const { createApp } = Vue
import { eventos } from "../eventos.js"
import { MainMenu } from "../components/Menu.js"

const queryParams = new URLSearchParams(window.location.search)
const idEvento = Number(queryParams.get("id"))
const evento = eventos.find(({ id }) => id === idEvento)

createApp({
  components: {
    MainMenu,
  },
  data() {
    return {
      evento,
    }
  },
  computed: {
    urlArtista() {
      return `./assets/img/${this.evento.img}`
    },
  },
}).mount("#app")
