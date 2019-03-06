import React from 'react';
import Nav from './Nav';
import './styles/About.css';

function About () {
    return (
      <div className='about-me-page'>
        <Nav />
        <h1 className='about-me-header'>About Me</h1>
        <p className='about-me-p'>Full-stack developer highly skilled in writing clean, testable code in the MERN stack. Looking for a full-time position where I can contribute right away and continue to develop my skills.</p>
        <p>I\'ve worked on several products from the front-end to the back-end, and I'm constantly strengthening my skills, learning new frameworks, and diving deeper into cutting-edge technologies. One of the best parts about being a developer is that there are always new and exciting technologies to learn and add to your arsenal!</p>
        <p>I graduated from Penn State with a degree in Kinesiology. I had a few different positions since graduation,and I think each one has given me a unique experience and skills that have aided me in my journey to software development. Both roles taught me the value of communication, staying organized and creating detailed to do lists in order to prioritize your day/week/month/LIFE. You never know what kinds of problems or unexpected events may occur while on the job, so it's imperative to be aware of which tasks are of a higher priority.</p>
        <p>I know this is a cliche thing to say, but I am truly a 'people person'. I love working on teams and meeting clients. Being able to lighten the load for a co-worker so they can get home to their family, or making a client happy by delivering their every need is a very rewarding feeling to me. I think being able and willing to make a difference, both with your work ethic and your personal interactions, is a very important trait to have in a successful work place.</p>
      </div>
    );
}

export default About;