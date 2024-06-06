import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { UserProvider } from "./UserContext.jsx";
import { useEffect, useState } from "react";
import i18next from "i18next";
import { Loader } from "./components/common/Loader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));

  useEffect(() => {
    i18next.on("loaded", () => {
      setIsLoading(false);
    });
    i18next.on("languageChanged", function (lng) {
      setLanguage(lng);
    });

    return () => {
      i18next.off("loaded");
      setIsLoading(false);
    };
  }, []);
  if (isLoading) {
    let message;
    if (language === "kr") {
      message = "سوپاس بۆ چاوەڕوانیت";
    } else {
      message = "Thanks For Waiting ";
    }
    return <Loader message={message} />;
  }
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
