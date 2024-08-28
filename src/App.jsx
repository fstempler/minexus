// Components
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Codin from './pages/Codin';
import Cataloging from './pages/Cataloging';
import Consulting from './pages/Consulting';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
// styles
import './App.css';

const Root = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/codin" element={<Codin />} />
      <Route path="/cataloging" element={<Cataloging />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Route>
  )  
);

function App() {
  

  return (
    <div>
      
      <RouterProvider router={routes} />
      
    </div>
  );
}

export default App;
