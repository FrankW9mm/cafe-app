import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './pages/Hero';
//average jersey club enjoyer
import CtaMiddle from './pages/CtaMiddle';
import Products from './pages/Products';
import Menu from './pages/Menu';
import Insperations_Redesign from './pages/Insperations_Redesign';
import Location from './pages/Location';
import About from './pages/About';
import Contact from './pages/Contact';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
   <div>
    <Navbar />
    <Hero/>
    {/* <Products /> */}
    <Insperations_Redesign />
    <CtaMiddle />
    <Menu />
    <Location />
    {/* <About/> */}
    <Contact />
   </div>
  );
}

export default App;
