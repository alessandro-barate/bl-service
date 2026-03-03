export const usePageTransition = () => {
  const isTransitioning = useState("pageTransition", () => false);
  const transitionText = useState("transitionText", () => "");

  const navigateWithTransition = async (path: string, text: string) => {
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
  };
};
