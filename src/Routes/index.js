import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing';
import Blog from '../components/Blog';
import singleBlog from '../components/SingleBlog';
import Works from '../components/Works';
import Login from '../components/Login';

function index() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Landing}
        onEnter={() => {
          document.getElementById('home').scrollIntoView();
        }}
      />
      <Route
        exact
        path="/blog"
        component={Blog}
      />
      <Route
        exact
        path="/works"
        component={Works}
      />
      <Route
        exact
        path="/login"
        component={Login}
      />
      <Route
        exact
        path="/about"
        component={Landing}
        onEnter={() => {
          document.getElementById('about').scrollIntoView();
        }}
      />
      <Route
        exact
        path="/service"
        component={Landing}
        onEnter={() => {
          document.getElementById('service').scrollIntoView();
        }}
      />
      <Route
        exact
        path="/contact"
        component={Landing}
        onEnter={() => {
          document.getElementById('contact').scrollIntoView();
        }}
      />
      <Route
        exact
        path="/portfolio"
        component={Landing}
        onEnter={() => {
          document.getElementById('portfolio').scrollIntoView();
        }}
      />
      <Route
        exact
        path="/blog/details"
        component={singleBlog}
      />

    </Switch>
  );
}

export default index;
