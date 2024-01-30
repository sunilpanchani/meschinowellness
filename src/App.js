import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from './Common/Loader';
import Layout from "./Common/Layout";
import Home from './Pages/Home';
import AboutUs from "./Pages/AboutUs";
import AboutDoctor from "./Pages/AboutDoctor";
import Individual from "./Pages/Individual";
import Organization from "./Pages/Organization";
import IndividualWellness from "./Pages/IndividualWellness";
import MentalHealth from "./Pages/MentalHealth";
import CorporateWellness from "./Pages/CorporateWellness";
import WellnessEcoSystem from "./Pages/WellnessEcoSystem";
import MeschinoHealthLiteracy from './Pages/MeschinoHealthLiteracy';
import Contact from "./Pages/Contact";
import ScrollToTop from "./Common/ScrollToTop";
import "./style.css";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Layout children={<Home />} />} />
            <Route path="/about-us" element={<Layout children={<AboutUs />} />} />
            <Route path="/about-dr-meschino" element={<Layout children={<AboutDoctor />} />} />
            <Route path="/how-it-works-for-individuals" element={<Layout children={<Individual />} />} />
            <Route path="/how-it-works-for-organizations" element={<Layout children={<Organization />} />} />
            <Route path="/wellness-program-individual-wellness" element={<Layout children={<IndividualWellness />} />} />
            <Route path="/wellness-program-mental-wellness" element={<Layout children={<MentalHealth />} />} />
            <Route path="/wellness-program-corporate-wellness" element={<Layout children={<CorporateWellness />} />} />
            <Route path="/wellness-program-wellness-eco-system" element={<Layout children={<WellnessEcoSystem />} />} />
            <Route path="/wellness-program-meschino-health-literacy" element={<Layout children={<MeschinoHealthLiteracy />} />} />
            <Route path="/contact-us" element={<Layout children={<Contact />} />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;
