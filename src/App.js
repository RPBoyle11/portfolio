import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="portfolio">
        <Route exact path='/RP-Boyle-Resume.pdf' component={'../documents/RP-Boyle-Resume.pdf'} />
        <Route exact path='/about-me' component={About} />
        <Route exact path='/contact-info' component={Contact} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
