import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;