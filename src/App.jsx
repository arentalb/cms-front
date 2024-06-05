import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
  // const { t, i18n } = useTranslation();
  //
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  // return (
  //   <div className="container mx-auto p-4">
  //     <div className="text-center">
  //       <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
  //       <p
  //         className="mb-2"
  //         dangerouslySetInnerHTML={{ __html: t("description.part1") }}
  //       ></p>
  //       <p className="mb-4">{t("description.part2")}</p>
  //       <div className="mb-6">
  //         <button
  //           className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
  //           onClick={() => changeLanguage("en")}
  //         >
  //           English
  //         </button>
  //         <button
  //           className="bg-green-500 text-white px-4 py-2 m-2 rounded"
  //           onClick={() => changeLanguage("fr")}
  //         >
  //           French
  //         </button>
  //         <button
  //           className="bg-yellow-500 text-white px-4 py-2 m-2 rounded"
  //           onClick={() => changeLanguage("kr")}
  //         >
  //           Kurdish
  //         </button>
  //       </div>
  //     </div>
  //
  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold mb-2">
  //         {t("sections.about.title")}
  //       </h2>
  //       <p>{t("sections.about.content")}</p>
  //     </section>
  //
  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold mb-2">
  //         {t("sections.features.title")}
  //       </h2>
  //       <p>{t("sections.features.content")}</p>
  //     </section>
  //
  //     <section className="mb-8">
  //       <h2 className="text-2xl font-semibold mb-2">
  //         {t("sections.contact.title")}
  //       </h2>
  //       <p>{t("sections.contact.content")}</p>
  //     </section>
  //   </div>
  // );
}

export default App;
