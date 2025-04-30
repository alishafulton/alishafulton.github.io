import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'



function App () {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ " hi "} />
    <Route path="/about" element={ " about me "} />
  </Routes>
</BrowserRouter>;
}

export default App;