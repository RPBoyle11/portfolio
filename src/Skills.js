import React from 'react';
import './styles/Skills.css';

function Skills () {
    return (
      <section className='skills-section'>
            <h2>Skills</h2>
            <section className='skills-lists'>
              <ul className='skill-list'>
                <h3>Front end</h3>
                <li><i className="devicon-javascript-plain colored"></i> Javascript</li> 
                <li><i className="devicon-react-original colored"></i> React/Redux</li> 
                
                <li><i className="devicon-python-plain colored"></i> Python</li>
                <li><i className="devicon-html5-plain colored"></i> HTML5</li> 
                <li><i className="devicon-css3-plain colored"></i> CSS</li> 
              </ul>    

              <ul className='skill-list'>
                <h3>Back end</h3>
                <li><i className="devicon-nodejs-plain colored"></i> NodeJS</li> 
                <li><i className="devicon-mongodb-plain colored"></i> MongoDB</li> 
                <li><i className="devicon-postgresql-plain colored"></i> PostgreSQL</li> 
                <li><i className="devicon-mocha-plain colored"></i> Mocha/Chai</li> 
              </ul>
              
              <ul className='skill-list'>
                <h3>Dev Tools</h3>
                <li><i className="devicon-git-plain colored"></i> Git</li> 
                <li><i className="devicon-github-plain"></i> Github</li> 
                <li><i className="devicon-heroku-plain colored"></i> Heroku</li> 
                <li><i className="devicon-travis-plain colored"></i> TravisCI</li>
              </ul>     
            </section>
      </section>
    );
}

export default Skills;