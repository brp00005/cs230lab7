import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
//import Home from './Home'; // Import the Home component
import Card from './Card';
import Contact from './contact'; // Import the Contact component

import { BrowserRouter, Routes, Route } from "react-router-dom"

function home() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/App.js" element={<Home />}></Route>
          <Route path="/Card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

      
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800367108</p>
      <p>Hi, I am Branden Purdum</p>

      
      <Card />

      
    </div>
  );

}

export default App;
