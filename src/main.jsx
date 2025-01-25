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
import Waaram from './Waarom/Waaram.jsx';
import Prest from './Prest/Prest.jsx';
import Card from './Card/Card.jsx';
import Startpagina from './Startpagina/startpagina.jsx';
import Overons from './Overons/overons.jsx';
import Veelgestelde from './Veelgestelde/Veelgestelde.jsx';
import Diensten from './Diensten/Diensten.jsx';


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
      },
      {
        path:"Waarom",
        element:<Waaram/>
      },
      {
        path:"Prest",
        element:<Prest/>
      },
      {
        path:"Card",
        element:<Card/>
      },
      {
        path:"/startpagina",
        element:<Startpagina/>
      },
      {
        path:"/overons",
        element:<Overons/>
      },
      {
        path:"/Veelgestelde",
        element:<Veelgestelde/>
      },
      {
        path:"/Diensten",
        element:<Diensten/>
      },
    ]
  }
  

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
