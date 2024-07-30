export const OrganizadorCard = {
  template: /*html*/ `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
      <div class="rounded-3 overflow-hidden">
        <h5 class="mb-0 bg1 text-end text-white p-2">
          {{ organizador.nombre }}
        </h5>
        <img
          class="w-100 aspect-ratio-4-3 object-fit-cover"
          :src="imgUrl"
          alt="organizador"
        />
        <div
          v-if="organizador.cv"
          class="p-2 bgLight text-center"
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
  props: ["organizador"],
  data() {
    return {
      imgUrl: `./assets/img/${this.organizador.img}`,
      linkUrl: `./organizadores.html?id=${this.organizador.id}`,
    }
  },
}
