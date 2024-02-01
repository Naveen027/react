// import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import { Nav } from 'react-bootstrap';

function App() {
  return (
   <div>
   <Navbar/>
   <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
   </Routes>
   </div>
  );
}

export default App;
