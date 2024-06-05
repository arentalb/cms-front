import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "../UserContext.jsx";

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

  return (
    <>
      {isEditing ? (
        <>
          <textarea
            value={editableText}
            onChange={handleChange}
            className="border p-1 w-auto bg-gray-500 text-white"
          />
          <button onClick={handleSave} className="ml-2 text-green-600">
            Save
          </button>
        </>
      ) : (
        <>
          {editableText}
          {user.role === "Admin" && (
            <button onClick={handleEditClick} className={"px-4"}>
              <svg
                className="fill-red-700 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
              </svg>
            </button>
          )}
        </>
      )}
    </>
  );
}
