export default defineNuxtPlugin((nuxtApp) => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  // Al reload: scroll immediato (lo smooth non farebbe in tempo)
  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0)
  })

  // Alla navigazione tra pagine: scroll smooth
  nuxtApp.hook('page:finish', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})