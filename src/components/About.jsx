import { useTranslation } from "react-i18next";
import { Header } from "./common/Header.jsx";
import { Footer } from "./common/Footer.jsx";

export function About() {
  const { t } = useTranslation("about");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
          <p className="text-base">{t("content")}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}