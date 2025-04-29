import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
      element: <App />,
    }
]
}])

ReactDom.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)