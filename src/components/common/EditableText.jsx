import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "../../UserContext.jsx";
import { Modal } from "./Modal.jsx";

export function EditableText({ translationKey }) {
  const { user } = useUser();
  const { t, i18n } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState("");

  useEffect(() => {
    // Split the translationKey to get the namespace and key
    const parts = translationKey.split(":");
    if (parts.length === 2) {
      setEditableText(t(translationKey));
    }
  }, [translationKey, t]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditableText(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Split the translationKey to get the namespace and key
    const parts = translationKey.split(":");
    if (parts.length === 2) {
      const namespace = parts[0];
      const keyName = parts[1];
      const body = {
        language: i18n.language,
        namespace,
        key: keyName,
        value: editableText,
      };
      console.log(body);
      // Call the API to save the changes
      fetch(`http://localhost:6060/api/translation`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((response) => {
        if (!response.ok) {
          console.error("Failed to save the text");
        }
      });
    }
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Modal isOpen={isEditing} onClose={handleClose}>
        <textarea
          value={editableText}
          onChange={handleChange}
          className="border p-2 w-full bg-gray-200 text-black rounded-md mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded-md text-lg"
          >
            {i18n.language === "kr" ? "هەڵگرتن" : "Save"}
          </button>
        </div>
      </Modal>
      {editableText}
      {user.role === "Admin" && (
        <svg
          onClick={handleEditClick}
          className="fill-red-700 cursor-pointer inline mx-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
        </svg>
      )}
    </>
  );
}
