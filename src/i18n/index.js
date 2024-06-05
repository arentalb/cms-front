import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeader from "./locales/en/components/header.json";
import enFooter from "./locales/en/components/footer.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enCommon from "./locales/en/common.json";

import krHeader from "./locales/kr/components/header.json";
import krFooter from "./locales/kr/components/footer.json";
import krHome from "./locales/kr/home.json";
import krAbout from "./locales/kr/about.json";
import krCommon from "./locales/kr/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        home: enHome,
        about: enAbout,
        common: enCommon,
        "components/header": enHeader,
        "components/footer": enFooter,
      },

      kr: {
        home: krHome,
        about: krAbout,
        common: krCommon,
        "components/header": krHeader,
        "components/footer": krFooter,
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    ns: ["common", "home", "about", "components/header", "components/footer"], // Define namespaces
    defaultNS: "common", // Default namespace

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
