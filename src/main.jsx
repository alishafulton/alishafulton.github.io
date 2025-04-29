import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';

const Layout =()=> {
  return(
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children:[
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    }
]
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)