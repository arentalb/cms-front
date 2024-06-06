import { EditableText } from "./EditableText.jsx";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { i18n } = useTranslation("header");

  return (
    <footer className="max-w-[1200px] mx-auto px-4 py-8 border-t w-full flex flex-col sm:flex-row justify-between items-center">
      <div
        className={
          "flex items-center w-full sm:w-auto mb-4 sm:mb-0 justify-between sm:justify-start gap-4"
        }
      >
        <img
          src={i18n.language === "kr" ? "/logo-kr.svg" : "/logo.svg"}
          alt=""
        />
        <p>
          <EditableText translationKey={"footer:rights"} />
        </p>
      </div>
      <div>
        <ul className={"flex items-center gap-5 flex-wrap sm:flex-nowrap"}>
          <li>
            <EditableText translationKey={"footer:terms"} />
          </li>
          <li>
            <EditableText translationKey={"footer:privacy"} />
          </li>
          <li>
            <EditableText translationKey={"footer:support"} />
          </li>
          <li>
            <EditableText translationKey={"footer:about"} />
          </li>
          <li>
            <EditableText translationKey={"footer:resources"} />
          </li>
          <li>
            <EditableText translationKey={"footer:contact"} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
