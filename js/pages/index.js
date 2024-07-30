// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue
import { eventos } from "../eventos.js"

createApp({
  data() {
    return {
      eventos,
    }
  },
}).mount("#app")
