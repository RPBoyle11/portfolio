import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav () {
  let name = '< rpBoyle />';
    return (
        <nav className='navbar'>
          <Link to='/work' className='nav-anchors'>Work</Link>
          <Link to='/about-me' className='nav-anchors'>About Me</Link>
          <Link to='/' className='nav-anchors'>{name}</Link>
          <Link to='/RP-Boyle-Resume.pdf' className='nav-anchors'>Resume</Link>
          <Link to='/contact-info' className='nav-anchors'>Contact</Link>
        </nav>
    );
}

export default Nav;
