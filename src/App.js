import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from './Shop';
import Contact from './Contact';
import Diy from './Diy';


function App() {
  return <Router>
  <nav>
    <Link to="/" className='link'>Shop</Link>
    <Link to="/diy" className='link'>DIY</Link>
    <Link to="/contact" className='link'>Contact</Link>
  </nav>
  
  <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/diy" element={<Diy/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  </Router>
}

export default App;
