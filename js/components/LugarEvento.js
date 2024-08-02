
export const LugarEvento = {
  template: /*html*/ `
    <div class="col-12 mb-3">
      <p class="mb-0 fw-bold">
        Lugar:
        <a
          :href="link"
          class="color2"
          target="_blank"
          >{{ nombre }}
          <i class="bi bi-geo-fill"></i>
        </a>
      </p>
    </div>
  `,
  props: ["nombre", "link"],
}