import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import About from './pages/ABout';


function App () {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
    </Routes>
    </BrowserRouter> ;
}

export default App;