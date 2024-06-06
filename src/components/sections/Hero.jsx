import { EditableText } from "../common/EditableText.jsx";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { i18n } = useTranslation("header");

  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] px-4 py-8 mx-auto "
      }
    >
      <div>
        <h1 className={"text-5xl font-bold mb-8 sm:text-7xl max-w-lg"}>
          <EditableText translationKey={"hero:title"} />
        </h1>
        <p className={"mb-8 max-w-lg"}>
          <EditableText translationKey={"hero:description"} />
        </p>
        <div className={"grid grid-cols-2 gap-4 mb-8 sm:max-w-md"}>
          <input
            type="text"
            className={"px-1.5 py-2 border rounded-md"}
            placeholder={
              i18n.language === "kr"
                ? "ئیمەیڵی کار داخڵ بکە"
                : "Enter Work Email"
            }
          />
          <button
            className={
              "bg-blue-500 px-8 py-2 rounded-md text-white hover:bg-blue-600"
            }
          >
            <EditableText translationKey={"hero:signup"} />
          </button>
        </div>
        <div
          className={
            "grid grid-cols-2 sm:grid-cols-4 bg-gray-100 p-4 gap-6 rounded-md"
          }
        >
          <img src="/company1.svg" alt="" />
          <img src="/company2.svg" alt="" />
          <img src="/company3.svg" alt="" />
          <img src="/company4.svg" alt="" />
        </div>
      </div>
      <div>
        <img src="/hero.svg" alt="" />
      </div>
    </div>
  );
}
