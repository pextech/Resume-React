import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes/index';

function App() {
  return (
    <Router>
      {' '}
      <div className="App h-100 bg-gray-100">
        <Routes />
      </div>
    </Router>

  );
}

export default App;
