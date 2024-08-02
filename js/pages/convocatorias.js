const { createApp } = Vue
import { convocatorias } from "../convocatorias.js"
import { MainMenu } from "../components/Menu.js"

const queryParams = new URLSearchParams(window.location.search)
const idConvocatoria = Number(queryParams.get("id"))

createApp({
  components: {
    MainMenu,
  },
  data() {
    return {
      convocatorias: convocatorias.sort((a, b) => a.id - b.id),
    }
  },
  computed: {
    convocatoria() {
      return this.convocatorias.find(({ id }) => id === idConvocatoria)
    },
  },
}).mount("#app")
