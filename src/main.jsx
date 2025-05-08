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
import ShiftMode from './ShiftMode/ShiftMode.jsx';
import Finguide from './Finguide/Finguide.jsx';
import Fluentlee from './Fluentlee/Fluentlee.jsx';
import Ahoyy from './Ahoyy/Ahoyy.jsx';
import Sarbuh from './Sarbuh/Sarbuh.jsx';
import SecondCardInputField from './SecondCardInputField/SecondCardInputField.jsx';
import StripePayment from './StripePayment/StripePayment.jsx';
import AdminLogin from './AdminLogin/AdminLogin.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

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
        path: "/contactpagina",
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
        path: "/marketingprijsplannen",//
        element: <Startpagina />,
      },
      {
        path: "/appontwikkeling",//
        element: <Appmarket/>,
      },
      {
        path: "/marketingontwikkeling",//
        element: <Marketing />,
      },
      {
        path: "/portfolio",
        element: <Blog />,
      },
      {
        path: "/henna-artist",
        element: <Henna />,
      },
      {
        path: "/shiftguide",
        element: <ShiftMode />,
      },
      {
        path: "/finguide",
        element: <Finguide/>,
      },
      {
        path: "/fluentlee",
        element: <Fluentlee />,
      },
      {
        path: "/marketingstrategie",
        element: <Ahoyy />,
      },
      {
        path: "/Van-Offline-naar-Online",
        element: <Sarbuh/>,
      },
      {
        path: "/overons",//
        element: <Overons/>,
      },
      {
        path: "/veelgesteldevragen",//
        element: <Veelgestelde />,
      },
      {
        path: "/brandingdiensten",//
        element: <Diensten />,
      },
      {
        path: "/websitebuilder",//
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
        path:`/payment/:id`,
        element: (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ),
      },
      {
          path: "/SecondCardInputField",
          element:<SecondCardInputField/>
      },

     
      {
        path:"/brandingprijsplannen",//
        element: <PrijzenBranding/>
      },
      {
        path:"/appontwikkelingprijsplannen",//
        element: <PrijzenMarketing/>
      },
      {
        path:"/stripePayment",
        element:<StripePayment/>
      },
      {
        path:"/admin",
        element:<AdminLogin/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <div className='max-w-[1440px] w-full mx-auto px-4'>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </div>
);
