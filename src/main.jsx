import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Banner/Banner.jsx';
import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import Onze from './Onze/Onze.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "Banner",
        element:<Banner/>
      },
      {
        path:"NavBar",
        element:<Navbar/>
      },
      {
        path:"Footer",
        element:<Footer></Footer>
      },
      {
        path:"Onze",
        element:<Onze></Onze>
      }
    ]
  }
  

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
