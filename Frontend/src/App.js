import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkTree from './components/LinkTree';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
  
      <div className="App flex flex-col min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project  />} />
          <Route path="/" element={<LinkTree UserName= "Anuj Rishu Tiwari" />} />
        </Routes>
        <Footer date="22 July 2024" />
      </div>

  );
}

export default App;