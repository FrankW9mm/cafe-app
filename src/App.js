import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './pages/Hero';
//average jersey club enjoyer
import CtaMiddle from './pages/CtaMiddle';
import Products from './pages/Products';
import Menu from './pages/Menu';
import Insperations_Redesign from './pages/Insperations_Redesign';

function App() {
  return (
   <div>
    <Navbar />
    <Hero/>
    <CtaMiddle />
    {/* <Products /> */}
    <Insperations_Redesign />
    <Menu />
   </div>
  );
}

export default App;
