import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
    <div class="w-full bg-green-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;