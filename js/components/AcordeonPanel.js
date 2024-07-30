export const AcordeonPanel = {
  template: /*html*/ `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed fw-bold fs-5"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="idTarget"
          aria-expanded="false"
          :aria-controls="target"
        >
          {{ header }}
        </button>
      </h2>
      <div
        :id="target"
        class="accordion-collapse collapse"
        :class="{show}"
        :data-bs-parent="idParentTArget"
      >
        <div class="container pt-3">
          <div class="row">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ["target", "parentTarget", "show", "header"],
  computed: {
    idTarget() {
      return `#${this.target}`
    },
    idParentTArget() {
      return `#${this.parentTarget}`
    },
  },
}
