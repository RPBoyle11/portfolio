import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav () {
  let name = '< rpBoyle />';
    return (
        <nav className='navbar'>
          <ul className='nav-anchors'>
            <li className='nav-anchor'>
              <a 
                href='#work-section'
              >
              Work
              </a>
            </li>
            <li className='nav-anchor'>
              <a 
                href='#aboutMe-section' 
              >
              About Me
              </a>
            </li>
            <li className='nav-anchor'>
              <a 
                href='/' 
                >
                {name}
              </a>
            </li>
            <li className='nav-anchor'>
              <Link 
                to='/RP-Boyle-Resume.pdf'
                >
                Resume
              </Link>
            </li>
            <li className='nav-anchor'>
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
