import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import App from './App';
import About from './assets/comp/About';
import Resume from './assets/comp/Contact';
import MoreProject from './assets/comp/MoreProject';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Resume/>,
  },
  {
    path: "/project",
    element: <MoreProject/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
