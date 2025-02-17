import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Banner from './Banner/Banner.jsx';
import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import Onze from './Onze/Onze.jsx';
import Waaram from './Waarom/Waaram.jsx';
import Prest from './Prest/Prest.jsx';
import Card from './Card/Card.jsx';
import Startpagina from './Startpagina/startpagina.jsx';

import Veelgestelde from './Veelgestelde/Veelgestelde.jsx';
import Diensten from './Diensten/Diensten.jsx';
import Prijzen from './Prijzen/Prijzen.jsx';
import CardsComponent from './CardsComponent/CardsComponent.jsx';
import InputField from './InputField/InputField.jsx';
import Payment from './Payment/Payment.jsx';
import { Toaster } from 'react-hot-toast'; // Toast for notifications
import Contact from './Contact/Contact.jsx';
import Appmarket from './Appmarket/Appmarket.jsx';
import Marketing from './Marketing/Marketing.jsx';
import Blog from './Blog/Blog.jsx';
import Henna from './Henna/Henna.jsx';
import Overons from './Overons/overons.jsx';
import PrijzenBranding from './PrijzenBranding/PrijzenBranding.jsx';
import PrijzenMarketing from './PrijzenMarketing/PrijzenMarketing.jsx';

// Load Stripe
const stripePromise = loadStripe("your-public-stripe-key");

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
        element: <Banner />,
      },
      {
        path: "/Contact",
        element: < Contact />,
      },
      {
        path: "NavBar",
        element: <Navbar />,
      },
      {
        path: "Footer",
        element: <Footer />,
      },
      {
        path: "Onze",
        element: <Onze />,
      },
      {
        path: "Waarom",
        element: <Waaram />,
      },
      {
        path: "Prest",
        element: <Prest />,
      },
      {
        path: "Card",
        element: <Card />,
      },
      {
        path: "/startpagina",
        element: <Startpagina />,
      },
      {
        path: "/appmarket",
        element: <Appmarket/>,
      },
      {
        path: "/marketing",
        element: <Marketing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/henna",
        element: <Henna />,
      },
      {
        path: "/overons",
        element: <Overons/>,
      },
      {
        path: "/Veelgestelde",
        element: <Veelgestelde />,
      },
      {
        path: "/Diensten",
        element: <Diensten />,
      },
      {
        path: "/prijzen",
        element: <Prijzen />,
      },
      {
        path: "/CardComponent",
        element: <CardsComponent />,
      },
      {
        path: "/InputField",
        element: <InputField />,
      },

      {
        path: "/payment",
        element: (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ),
      },
      {
        path:"/PrijzenBranding",
        element: <PrijzenBranding/>
      },
      {
        path:"/PrijzenMarkeing",
        element: <PrijzenMarketing/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <div >
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </div>
);
