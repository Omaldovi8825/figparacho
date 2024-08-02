export const CopyRight = {
  template: /*html*/ `
    <div class="bgDark p-3">
      <p class="mb-0 text-white text-center">
        Copyright © Festival Internacional de Guitarra de Paracho – Todos los
        derechos reservados 2024.
      </p>
    </div>
  `,
  computed: {
    anioActual() {
      const dt = new Date()
      return dt.getFullYear()
    },
  },
}
