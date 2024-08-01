const { createApp } = Vue
import { MainMenu } from "../components/Menu.js"

createApp({
  components: {
    MainMenu,
  },
  data() {
    return {
      convocatorias: [
        {
          id: 1,
          nombre: "Manuel Monroy",
        },
        {
          id: 2,
          nombre: "Gildardo Zalapa",
        },
        {
          id: 3,
          nombre: "Jaime Gómez",
        },
      ],
    }
  },
}).mount("#app")
