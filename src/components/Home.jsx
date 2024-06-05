import { useTranslation } from "react-i18next";
import { Header } from "./common/Header.jsx";
import { Footer } from "./common/Footer.jsx";

export function Home() {
  const { t } = useTranslation("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{t("content")}</h1>
          <h2 className="text-xl font-semibold mb-2">{t("title")}</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
