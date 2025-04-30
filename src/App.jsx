import { BrowserRouter, Routes, Route } from 'react-router';
import React from 'react'



function App () {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ " hey "} />
    <Route path="about" element={ " about me "} />
  </Routes>
</BrowserRouter>;
}

export default App;