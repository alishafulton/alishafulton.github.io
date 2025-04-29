import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import About from './pages/ABout';

function App () {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<About/>} />
  </Routes>
</BrowserRouter>;
}

export default App;