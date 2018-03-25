export const state = () => ({
  locales: ['en', 'fr', 'es'],
  locale: 'fr',
  sidebar: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
