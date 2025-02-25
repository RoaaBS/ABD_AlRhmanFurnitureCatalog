import Footer from './Components/Footer/Footer';
import UserLayout from './Layout/UserLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter , BrowserRouter, Routes, Route} from 'react-router-dom';
import Sofa from './Pages/Sofa/Sofa';
import SofaCorners from './Pages/Sofa/SofaCorners';
import GB from './Pages/Cabinets/GB';
import Buffet from './Pages/Buffet/Buffet';
import Tables from './Pages/Table/Tables';
import AllCabinets from './Pages/Cabinets/AllCabinets';
import Smcabinets from './Pages/Cabinets/Smcabinets';
import GlassCabinets from './Pages/Cabinets/GlassCabinets';
import WoodenCabinets from './Pages/Cabinets/WoodenCabinets';
import Chairs from './Pages/Chairs/Chairs';
import Bed from './Pages/Bed/Bed';
import BedO from './Pages/Bed/BedO';
import BedT from './Pages/Bed/BedT';
import CabinetsLibr from './Pages/Cabinets/CabinetsLibr';
import ServiCabinets from './Pages/Cabinets/ServiCabinets';
import AB from './Pages/Bed/AB';
import AllSofa from './Pages/Sofa/AllSofa';
import "bootstrap/dist/css/bootstrap.min.css";
import DiningChairs from './Pages/Chairs/DiningChairs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />
  },
  {
    path: "AllSofa",
    element: <AllSofa />,},
    {
      path: "sofa",
      element: <Sofa />,},
    
    { path: "sofa/sofaCorners", element: <SofaCorners /> },
    {path:"AllCabinets",
  element:<AllCabinets/>},
  {
    path:"AB",
    element:<AB/>
  },
  {path:"smCabinets",
element:<Smcabinets/>},

{path:"WoodenCabinets",
element:<WoodenCabinets/>},

{path:"GlassCabinets",
element:<GlassCabinets/>},
{path:"Library&Cabinets",
element:<CabinetsLibr/>},
{path:"ServiceCabinets",
element:<ServiCabinets/>},
  {
    path:"buffets",
    element:<Buffet/>
  },
  {path:"Tables",
element:<Tables/>},
{path:"Chairs",
element:<Chairs/>},
{path:"DinningChairs",
element:<DiningChairs/>},
{path:"Bed",
element:<Bed/>},
{path:"ABCatalog",
element:<AB/>},
{path:"GBCatalog",
element:<GB/>},
{path:"BedO",
element:<BedO/>},
{path:"BedT",
element:<BedT/>},
  {
    path: "footer",
    element: <Footer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
