const { createApp } = Vue
import { organizadores } from "../organizadores.js"
import { MainMenu } from "../components/Menu.js"
import { CopyRight } from "../components/Copyright.js"

const queryParams = new URLSearchParams(window.location.search)
const idOrganizador = Number(queryParams.get("id"))
const organizador = organizadores.find(({ id }) => id === idOrganizador)

createApp({
  components: {
    MainMenu,
    CopyRight,
  },
  data() {
    return {
      organizador,
    }
  },
  computed: {
    urlImg() {
      return `./assets/img/${this.organizador.img}`
    },
  },
}).mount("#app")
