import React from 'react';
import './styles/Welcome.css';

function Welcome () {
  return (
    <section className='introduction'>
      <div className='intro-text'>
        <header>
          <h1>Robert Patrick Boyle</h1>
        </header>
        <div className='description'>
          <p id='me'>never stop learning</p>
          <p>fullstack developer.</p>
        </div>
      </div>
    </section>
);
}

export default Welcome;