const { createApp } = Vue
import { convocatorias } from "../convocatorias.js"
import { MainMenu } from "../components/Menu.js"
import { CopyRight } from "../components/Copyright.js"

const queryParams = new URLSearchParams(window.location.search)
const idConvocatoria = Number(queryParams.get("id"))

createApp({
  components: {
    MainMenu,
    CopyRight,
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
