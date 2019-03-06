import React from 'react';
import './styles/Work.css';

function Work () {
  return (
    <div id='work-section'>
      <h2>Work</h2>
        <ul id='projects-list'>
        <li className='project-item'>
            <a href="https://road-rate-client.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer"><img src='./extras/lightbulb.jpg' alt='roadRate dashboard' className='responsive'></img></a>   
              <div className='project-info'>
                <h2>
                  <a href="https://road-rate-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">RoadRate</a>
                  <span><a className='github-icon' href="https://github.com/thinkful-ei26/roadrate-client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a></span>
                </h2>
                <p className='project-description'>The internet's first public drivers database. Rate, review, and register license plates!</p>
                <p><i className="devicon-javascript-plain colored"></i> <i className="devicon-react-original colored"></i> <i className="devicon-mongodb-plain colored"></i> <i className="devicon-nodejs-plain colored"></i> <i className="devicon-heroku-plain colored"></i> </p>
              </div>  
          </li>
          <li className='project-item'>
            <a href="https://dcnc-client.herokuapp.com/" className="picture-link" target="_blank" rel="noopener noreferrer"><img src='./extras/lightbulb.jpg' alt='mealcraft project' className='responsive'></img></a>   
              <div className='project-info'>
                <h2>
                  <a href="https://dcnc-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Donna's Crafts N Creations</a>
                  <span><a className='github-icon' href="https://github.com/thinkful-ei26/RP-DCaC-client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a></span>
                </h2>
                <p className='project-description'>Do you love handmade custom crafts?  Then this is the perfect spot for you.  Search through handmade wreathes, decorations and other trinkets that you wont be able to live without.</p>
                <p><i className="devicon-javascript-plain colored"></i> <i className="devicon-react-original colored"></i> <i className="devicon-mongodb-plain colored"></i> <i className="devicon-nodejs-plain colored"></i> <i className="devicon-heroku-plain colored"></i> </p>
              </div>  
          </li>
          <li className='project-item'>
              <a href='https://fathomless-savannah-97450.herokuapp.com/' className="picture-link" target="_blank" rel="noopener noreferrer"><img src='./extras/lightbulb.jpg' alt='frenchMate landingpage' className='responsive'></img></a>  
              <div className='project-info'>
                <h2>
                  <a href="https://fathomless-savannah-97450.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Italian 5000</a>
                  <span><a className='github-icon' href="https://github.com/thinkful-ei26/Randy-RP-Spaced-Rep-Client" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a></span>
                </h2>
                <p className='project-description'>Simple word learning app, using a spaced repetition algorithm to maximize efficiency.</p>
                <p><i className="devicon-javascript-plain colored"></i> <i className="devicon-react-original colored"></i> <i className="devicon-mongodb-plain colored"></i> <i className="devicon-nodejs-plain colored"></i> <i className="devicon-heroku-plain colored"></i> </p>
                {/* <p><span style={bold}> TechStack: </span>React/Redux for frontend, Node.js/MongoDB for backend and databse management. Hosted on Heroku.</p> */}
              </div>  
          </li>
        </ul>    
      
    </div>
);
}

export default Work;
