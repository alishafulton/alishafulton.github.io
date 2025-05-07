import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import PortfolioPage from "./components/PortfolioPage";
import Footer from "./Footer";
import BiomePage from "./components/Biome";

function App() {
  return (
    <>
    <div class="w-screen h-screen bg-gray-100 ">
      <Navbar />
      <div  class="flex w-full h-[calc(100vh-128px)] overflow-hidden">
        <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio"  element={<PortfolioPage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/biome" element={<BiomePage />} />
      </Routes>
      </div>
      <Footer/>

      </div>
    </>
  );
}

export default App;