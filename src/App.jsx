import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';
import About from './pages/ABout';


function App () {
  return <BrowserRouter basename={import.meta.env.BASE_URL} >
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/" element={ <About/> }/>
    </Routes>
    </BrowserRouter> ;
}

export default App;