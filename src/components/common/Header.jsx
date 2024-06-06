import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { EditableText } from "./EditableText.jsx";

export function Header() {
  const [menu, setMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { t, i18n } = useTranslation("header");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("chnage language ", lng);
  };

  useEffect(() => {
    if (i18n.language === "kr") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="relative max-w-[1200px] border-b font-semibold w-full mx-auto px-4 py-8 flex justify-between items-center">
      <img src={i18n.language === "kr" ? "/logo-kr.svg" : "/logo.svg"} alt="" />
      <nav className={"hidden md:flex"}>
        <ul className={"flex justify-between items-center gap-8 text-gray-800"}>
          <li className={"hover:text-blue-500"}>
            <EditableText translationKey={"header:product"} />
          </li>
          <li className={"hover:text-blue-500"}>
            <EditableText translationKey={"header:contact"} />
          </li>
          <li className={"hover:text-blue-500"}>
            <EditableText translationKey={"header:help"} />
          </li>
        </ul>
      </nav>
      <div className={"hidden md:flex items-center gap-8"}>
        <button
          className={
            "text-blue-500 underline underline-offset-2 hover:text-blue-600"
          }
        >
          <EditableText translationKey={"header:login"} />
        </button>
        <button
          className={
            "bg-blue-500 px-8 py-2 rounded-md text-white hover:bg-blue-600"
          }
        >
          <EditableText translationKey={"header:signup"} />
        </button>
      </div>
      <div className={"md:hidden flex items-center gap-8"}>
        <button onClick={() => setMenu(!menu)}>
          {menu ? (
            <img src="/x.svg" alt="Close menu" />
          ) : (
            <img src="/burger.svg" alt="Open menu" />
          )}
        </button>
      </div>
      {menu && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className={"hover:text-blue-500"}>
              <EditableText translationKey={"header:product"} />
            </li>
            <li className={"hover:text-blue-500"}>
              <EditableText translationKey={"header:contact"} />
            </li>
            <li className={"hover:text-blue-500"}>
              <EditableText translationKey={"header:help"} />
            </li>
            <button
              className={
                "text-blue-500 underline underline-offset-2 hover:text-blue-600"
              }
            >
              <EditableText translationKey={"header:login"} />
            </button>
            <button
              className={
                "bg-blue-500 px-8 py-2 rounded-md text-white hover:bg-blue-600"
              }
            >
              <EditableText translationKey={"header:signup"} />
            </button>
          </ul>
        </nav>
      )}
      <div className="fixed bottom-10 right-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white flex justify-center items-center font-bold p-4 w-6 h-6 rounded-full"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          La
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 -top-24 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
            <button
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => changeLanguage("kr")}
            >
              Kurdish
            </button>
            {/* Add more language options here if needed */}
          </div>
        )}
      </div>
    </header>
  );
}
