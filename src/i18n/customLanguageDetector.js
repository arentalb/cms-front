const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    const browserLanguage = navigator.language || navigator.userLanguage;
    callback(savedLanguage || browserLanguage);
  },
  init: () => {},
  cacheUserLanguage: (lng) => {
    localStorage.setItem("i18nextLng", lng);
  },
};

export default languageDetector;
