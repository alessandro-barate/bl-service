export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  const { navigateWithTransition, getTitleFromPath, isTransitioning } =
    usePageTransition();

  // Intercetta tutti i cambi di route
  router.beforeEach((to, from, next) => {
    // Se la navigazione è causata dalla transizione stessa, lascia passare
    if (to.path === from.path || isTransitioning.value) {
      next();
      return;
    }

    // Previeni la navigazione normale
    next(false);

    // Usa la transizione per navigare
    const title = getTitleFromPath(to.path);
    navigateWithTransition(to.path, title);
  });
});
