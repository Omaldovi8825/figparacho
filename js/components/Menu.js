const MenuItem = {
  template: /*html*/ `
    <li class="list-group-item bg-transparent">
      <a :href="link" class="text-white text-decoration-none fs-3">
        <slot></slot>
      </a>
    </li>
  `,
  props: ["titulo", "link"],
}

export const MainMenu = {
  components: {
    MenuItem,
  },
  template: /*html*/ `
    <div class="position-sticky top-0 bgDark text-end pe-2">
      <button class="bg-transparent p-0 border-0" @click="abrirMenu">
        <i
          class="bi text-white fs-1"
          :class="showMenu ? 'bi-x-circle' : 'bi-list'"
        >
        </i>
      </button>
    </div>
    <teleport to="body">
      <transition>
        <div
          v-if="showMenu"
          class="position-fixed top-0 left-0 vh-100 w-75 z-1 bg2"
        >
          <nav>
            <ul class="list-group list-group-flush py-3 px-2">
              <menu-item
                v-for="({titulo, link}) in menuItems"
                :key:="titulo"
                :link="link"
              >
                {{ titulo }}
              </menu-item>
            </ul>
          </nav>
        </div>
        </transition>
    </teleport>
  `,
  data() {
    return {
      showMenu: false,
      menuItems: [
        {
          titulo: "Inicio",
          link: "/",
        },
        {
          titulo: "Convocatorias",
          link: "/convocatorias.html",
        },
        {
          titulo: "Sedes",
          link: "/",
        },
      ],
    }
  },
  methods: {
    abrirMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
