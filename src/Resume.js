import React from 'react';
import { Link } from 'react-router-dom';
import resume from './extras/RP-Boyle-Resume.pdf';

function Resume () {
  return (
      <div className='resume-page'>
        <header>
          <Link
          to='/'><h1>Robert Patrick Boyle</h1></Link>
        </header>
        <section className='resume-pdf'>
        <img src={resume} alt='resume'></img>
        </section>
      </div>
);
}
 
export default Resume;