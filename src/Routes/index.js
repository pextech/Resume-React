import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing';

function index() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  );
}

export default index;
