import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
    <div class="w-full h-screen bg-gray-100">
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