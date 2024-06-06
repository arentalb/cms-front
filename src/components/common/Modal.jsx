import { useTranslation } from "react-i18next";

export function Modal({ isOpen, onClose, children }) {
  const { i18n } = useTranslation("header");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 w-full mx-4 sm:mx-0 sm:w-2/3 sm:w-1/3 text-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">
            {i18n.language === "kr" ? "دەستکاری دەق" : "Edit Text"}
          </h2>
          <button onClick={onClose} className="text-red-600 ">
            <img src="/x.svg" alt="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
