import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav () {
  let name = '< rpBoyle />';
    return (
        <nav className='navbar'>
          <ul className='nav-anchors'>
            <li className='nav-anchor work'>
              <a 
                href='#work-section'
              >
              Work
              </a>
            </li>
            <li className='nav-anchor name'>
              <a 
                href='#aboutMe-section' 
                >
                {name}
              </a>
            </li>
            <li className='nav-anchor about'>
              <a 
                href='#aboutMe-section' 
              >
              About Me
              </a>
            </li>
            <li className='nav-anchor resume'>
              <a
                href='RP-Boyle-Resume.pdf'
                target='_blank'
                >
                Resume
              </a>
            </li>
            <li className='nav-anchor contact'>
              <a 
                href='#contact-section'
                >
                Contact
              </a>
            </li>
          </ul>          
        </nav>
    );
}

export default Nav;
