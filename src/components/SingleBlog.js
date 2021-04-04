import React from 'react';
import Details from './BlogComponents/Details';
import Header from './BlogComponents/Header';
import Contact from './LandingComponents/Contact';
import Footer from './LandingComponents/Footer';
import Navbar from './LandingComponents/Navbar';

function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <Details />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
