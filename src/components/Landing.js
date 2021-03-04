import React from 'react';
import About from './LandingComponents/About';
import Header from './LandingComponents/Header';
import Navbar from './LandingComponents/Navbar';
import Service from './LandingComponents/Service';

function Landing() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Service />
    </>
  );
}

export default Landing;
