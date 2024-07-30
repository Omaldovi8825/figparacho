// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue
import { eventos } from "../eventos.js"

let estelares = []

for (const evento of eventos) {
  switch(evento.tipo){
    case "estelar":
      estelares.push(evento)
      break
  }
}

createApp({
  data() {
    return {
      estelares,
    }
  },
}).mount("#app")
