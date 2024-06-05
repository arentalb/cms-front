import { Header } from "./common/Header.jsx";
import { Footer } from "./common/Footer.jsx";
import { EditableText } from "./EditableText.jsx";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">
            <EditableText translationKey="home:title" />
          </h1>

          <h2 className="text-xl font-semibold mb-2">
            <EditableText translationKey="home:content" />
          </h2>
          <p>test</p>
          <h2 className="text-xl font-semibold mb-2">
            <EditableText translationKey="home:test" />
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}
