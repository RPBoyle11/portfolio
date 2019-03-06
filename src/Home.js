import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Welcome from './Welcome';

import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="portfolio">
        <Nav /> 
        <Welcome />
        <About />
        <Skills />
        <Work />
      </div>
    );
  }
}

export default Home;
