import React from 'react';
import About from './LandingComponents/About';
import Contact from './LandingComponents/Contact';
import Footer from './LandingComponents/Footer';
import Header from './LandingComponents/Header';
import Navbar from './LandingComponents/Navbar';
import Service from './LandingComponents/Service';
import Sketch from './LandingComponents/Sketch';
import SkillSection from './LandingComponents/SkillSection';
import Whyme from './LandingComponents/Whyme';

function Landing() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Sketch />
      <Service />
      <Whyme />
      <SkillSection />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
