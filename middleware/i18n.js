// export default function({ isHMR, app, store, route, params, error, redirect }) {
//   const defaultLocale = app.i18n.fallbackLocale
//   // If middleware is called from hot module replacement, ignore it
//   if (isHMR) return
//   // Get locale from params
//   const locale = params.lang || defaultLocale
//   if (store.state.locales.indexOf(locale) === -1) {
//     return error({ message: 'This page could not be found.', statusCode: 404 })
//   }
//   // Set locale
//   store.commit('SET_LANG', locale)
//   app.i18n.locale = store.state.locale
//   // If route is /<defaultLocale>/... -> redirect to /...
//   if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
//     const toReplace = '^/' + defaultLocale
//     const re = new RegExp(toReplace)
//     return redirect(
//       route.fullPath.replace(re, '/')
//     )
//   }
// }

/*
https://medium.com/@allenhwkim/multiple-language-with-nuxt-vuejs-efc3dad45eac
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  if (isHMR) { // ignore if called from hot module replacement
    return
  } else if (!params.lang) {
    // if url does not have language, redirect to english
    return redirect('/es' + route.fullPath)
  }
  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  const locale = params.lang || 'es'
  store.commit('SET_LANG', locale) // set store
  app.i18n.locale = store.state.locale
}
