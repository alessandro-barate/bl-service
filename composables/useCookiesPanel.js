export const useCookiesPanel = () => {
  const showCookiesPanel = useState("showCookiesPanel", () => false);

  const openCookiesPanel = () => {
    showCookiesPanel.value = true;
  };

  const closeCookiesPanel = () => {
    showCookiesPanel.value = false;
  };

  return {
    showCookiesPanel,
    openCookiesPanel,
    closeCookiesPanel,
  };
};
