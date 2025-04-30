import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React from 'react'
import Home from './pages/Home';


function App () {
  return <div><Outlet/></div> ;
}

export default App;