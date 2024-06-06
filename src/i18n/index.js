import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      // loadPath: "http://localhost:6060/locales/{{lng}}/{{ns}}.json", // URL to load translations from your backend
      loadPath: "http://localhost:6060/api/translation/{{lng}}/{{ns}}", // URL to load translations with placeholders
    },
    lng: "en", // default language
    fallbackLng: "en",
    ns: ["home", "about", "header", "footer", "buttons", "hero"],
    defaultNS: "home", // Default namespace

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
