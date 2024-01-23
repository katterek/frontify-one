import Root from "./Root.js"

export default {
  name: "landing-page-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen: false
    }
  },
  actions: {
    theme: {
      // add these actions:
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      }
    }
  }
};