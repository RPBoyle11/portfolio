import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="portfolio">
        <Nav /> 
        <h1>Hi.  My name is RP Boyle</h1>
        <h2>a developer</h2>
      </div>
    );
  }
}

export default Home;
