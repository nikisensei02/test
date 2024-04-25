import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/home/Navbar';
import AboutUs from './components/home/AboutUs';
import Home from './components/home/Home';
import Contact from './components/home/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
