import Footer from './Components/Footer/Footer';
import UserLayout from './Layout/UserLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sofa from './Pages/Sofa/Sofa';
import SofaCorners from './Pages/Sofa/SofaCorners';
import Cabinets from './Pages/Cabinets/Cabinets';
import buffet from './Pages/buffet/buffet';
import Buffet from './Pages/buffet/buffet';
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
import BedRoom from './Pages/Bed/BedRoom';
import SofaT from './Pages/Sofa/SofaT';
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />
  },
  {
    path: "sofaT",
    element: <SofaT />,},
    {
      path: "sofa",
      element: <Sofa />,},
    
    { path: "sofa/sofaCorners", element: <SofaCorners /> },
    {path:"AllCabinets",
  element:<AllCabinets/>},
  {
    path:"cabinets",
    element:<Cabinets/>
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
{path:"Bed",
element:<Bed/>},
{path:"BedRoom",
element:<BedRoom/>},
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
