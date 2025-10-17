import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Import your components with file extensions
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here later, e.g.: */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;