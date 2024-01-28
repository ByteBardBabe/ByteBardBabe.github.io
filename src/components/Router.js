import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Routes } from "react-router";
import Home from './Home.js';
import About from './About.js';
import Art from './Art.js';
import Contact from './Contact.js';

const RouterComponent = () => {
  return (
    
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/art" element={<Art/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    
  );
};

export default RouterComponent;