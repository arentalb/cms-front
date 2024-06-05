import { EditableText } from "../EditableText.jsx";

export function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>
        <EditableText translationKey="footer:copyright" />
      </p>
      <p>
        <EditableText translationKey="footer:contact" />
      </p>
    </footer>
  );
}
