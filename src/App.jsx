import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { UserProvider } from "./UserContext.jsx";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
