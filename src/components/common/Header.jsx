import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Header() {
  const { t, i18n } = useTranslation("header");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    if (i18n.language === "kr") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                {t("subtitle")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                about
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => changeLanguage("kr")}
          >
            Kurdish
          </button>
        </div>
      </div>
    </header>
  );
}
