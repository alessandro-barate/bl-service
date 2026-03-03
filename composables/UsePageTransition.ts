export const usePageTransition = () => {
  const isTransitioning = useState("pageTransition", () => false);
  const transitionText = useState("transitionText", () => "");

  // Mappa dei percorsi e i loro titoli
  const pageTitles: Record<string, string> = {
    "/": "Home",
    "/servizi": "I Nostri Servizi",
    "/prodotti": "Prodotti",
    "/bl-service": "BL Service",
    "/aree": "Aree",
    "/qualita": "Qualità",
    "/contatti": "Contatti",
    "/news": "News",
  };

  // Funzione per ottenere il titolo da un path
  const getTitleFromPath = (path: string): string => {
    return pageTitles[path] || "Pagina";
  };

  const navigateWithTransition = async (path: string, customText?: string) => {
    // Usa il testo custom se fornito, altrimenti usa il titolo dalla mappa
    const text = customText || getTitleFromPath(path);

    // Mostra overlay nero con testo
    transitionText.value = text;
    isTransitioning.value = true;

    // Aspetta 3 secondi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Naviga alla nuova pagina
    await navigateTo(path);

    // Nascondi overlay
    isTransitioning.value = false;
    transitionText.value = "";
  };

  return {
    isTransitioning,
    transitionText,
    navigateWithTransition,
    getTitleFromPath,
  };
};
