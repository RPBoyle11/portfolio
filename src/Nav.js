import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav () {
  let name = '< rpBoyle />';
    return (
        <nav className='navbar'>
          <ul className='nav-anchors'>
            <li className='nav-anchor'>
              <Link 
                to='/work'
              >
              Work
              </Link>
            </li>
            <li className='nav-anchor'>
              <Link 
                to='#aboutMe' 
              >
              About Me
              </Link>
            </li>
            <li className='nav-anchor'>
              <Link 
                to='/' 
                >
                {name}
                </Link>
            </li>
            <li className='nav-anchor'>
              <Link 
                to='/RP-Boyle-Resume.pdf'
                >
                Resume
              </Link>
            </li>
            <li className='nav-anchor'>
              <Link 
                to='/contact-info'
                >
                Contact
                </Link>
            </li>
          </ul>          
        </nav>
    );
}

export default Nav;
