import { Header } from "./common/Header.jsx";
import { Footer } from "./common/Footer.jsx";
import { Hero } from "./sections/Hero.jsx";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
