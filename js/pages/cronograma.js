const { createApp } = Vue
import { MainMenu } from "../components/Menu.js"
import { CopyRight } from "../components/Copyright.js"
import { LugarEvento } from "../components/LugarEvento.js"
import { sedes } from "../sedes.js"

createApp({
  components: {
    MainMenu,
    CopyRight,
    LugarEvento,
  },
  data() {
    return {
      sedes,
    }
  },
}).mount("#app")
