const { createApp } = Vue
import { eventos } from "../eventos.js"
import { MainMenu } from "../components/Menu.js"
import { CopyRight } from "../components/Copyright.js"

const queryParams = new URLSearchParams(window.location.search)
const idEvento = Number(queryParams.get("id"))
const evento = eventos.find(({ id }) => id === idEvento)

createApp({
  components: {
    MainMenu,
    CopyRight,
  },
  data() {
    return {
      evento,
    }
  },
}).mount("#app")
