import React from 'react';
import Container from './BlogComponents/Container';
import Header from './BlogComponents/Header';
import Contact from './LandingComponents/Contact';
import Footer from './LandingComponents/Footer';
import Navbar from './LandingComponents/Navbar';

function Landing() {
  return (
    <>
      <Navbar />
      <Header />
      <Container />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
