export const usePrivacyPanel = () => {
  const showPrivacyPanel = useState("showPrivacyPanel", () => false);

  const openPrivacyPanel = () => {
    showPrivacyPanel.value = true;
  };

  const closePrivacyPanel = () => {
    showPrivacyPanel.value = false;
  };

  const togglePrivacyPanel = () => {
    showPrivacyPanel.value = !showPrivacyPanel.value;
  };

  return {
    showPrivacyPanel,
    openPrivacyPanel,
    closePrivacyPanel,
    togglePrivacyPanel,
  };
};
