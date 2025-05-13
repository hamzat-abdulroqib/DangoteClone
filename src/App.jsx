import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import BusinessPage from "./pages/BusinessPage";
import Ourproduct from "./pages/Ourproduct";

import BLogpage from "./pages/BLogpage";
import Career from "./pages/Career";
import Saltpage from "./pages/Saltpage";
import Sugarpage from "./pages/Sugarpage";
import Fertilizerpage from "./pages/Fertilizerpage";
import Ricepage from "./pages/RicePage";
import Energypage from "./pages/Energypage";
import Oilpage from "./pages/Oilpage";
import Logisticpage from "./pages/Logisticpage";
import Trainingpage from "./pages/TrainingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourproduct" element={<Ourproduct />} />
        <Route path="/page" element={<BLogpage />} />
        <Route path="career" element={<Career />} />
        <Route path="/Saltpage" element={<Saltpage />} />
        <Route path="/Sugarpage" element={<Sugarpage />} />
        <Route path="/Fertilizerpage" element={<Fertilizerpage />} />
        <Route path="/ricepage" element={<Ricepage />} />
        <Route path="/energypage" element={<Energypage />} />
        <Route path="/oilpage" element={<Oilpage />} />
        <Route path="/trainingpage" element={<Trainingpage />} />

        <Route path="/logisticspage" element={<Logisticpage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
