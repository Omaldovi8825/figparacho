export const EventoCard = {
  template: /*html*/ `
    <div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="rounded-3 overflow-hidden">
        <h5 class="mb-0 bg1 text-end text-white p-2">
          {{ nombreEvento }}
        </h5>
        <img
          class="w-100 aspect-ratio-4-3 object-fit-cover"
          :src="imgUrl"
          alt="evento"
        />
        <div
          class="d-flex justify-content-between align-items-center p-2 bgLight"
        >
          <span
            >{{ evento.fecha }} de agosto - {{ evento.hora }}
            hrs</span
          >
          <a
            class="text-decoration-none bg2 text-white py-1 px-2 rounded"
            :href="linkUrl"
            >Ver más</a
          >
        </div>
      </div>
    </div>
  `,
  props: ["evento"],
  data() {
    return {
      nombreEvento: this.evento.nombre || this.evento.artistas[0].nombre,
      imgUrl: `./assets/img/${this.evento.img || this.evento.artistas[0].img}`,
      linkUrl: `./eventos.html?id=${this.evento.id}`,
    }
  },
}
