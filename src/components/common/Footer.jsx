import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>{t("copyright")}</p>
      <p>{t("contact")}</p>
      <button>{t("buttons:submit")}</button>
    </footer>
  );
}
