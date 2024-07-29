export const eventoCard = {
  template: /*html*/ `
  <div class="col-12 col-md-4">
    <div class="rounded-3 overflow-hidden">
      <h5 class="mb-0 bg1 text-end text-white p-2">
        {{ evento.artista }}
      </h5>
      <img class="w-100" :src="imgUrl" alt="" />
      <div class="d-flex justify-content-between p-2 bg4">
        <span class="text-white">{{ fechaYhora }}</span>
        <a
          class="text-decoration-none bg2 text-white py-1 px-2 rounded"
          :href="linkEvento"
          >Ver más</a
        >
      </div>
    </div>
  </div>
  `,
  props: ["evento"],
  data() {
    return {
      imgUrl: `./assets/img/${this.evento.img}`,
      linkEvento: `./eventos.html?id=${this.evento.id}`,
    }
  },
  computed: {
    fechaYhora() {
      return `${this.evento.fecha} - ${this.evento.hora} hrs`
    },
  },
}
