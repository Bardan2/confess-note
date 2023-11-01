import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
