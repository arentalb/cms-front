import { Header } from "./common/Header.jsx";
import { Footer } from "./common/Footer.jsx";
import { EditableText } from "./common/EditableText.jsx";

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">
            <EditableText translationKey="about:title" />
          </h1>
          <p className="text-base">
            <EditableText translationKey="about:content" />
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
