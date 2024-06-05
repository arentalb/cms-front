import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("components/footer");

  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      {t("footerText")}
    </footer>
  );
}
