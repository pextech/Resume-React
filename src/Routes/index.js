import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import About from '../components/LandingComponents/About';
import Contact from '../components/LandingComponents/Contact';
import Service from '../components/LandingComponents/Service';
import Sketch from '../components/LandingComponents/Sketch';

function index() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Sketch} />

    </Switch>
  );
}

export default index;
