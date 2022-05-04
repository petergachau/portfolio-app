import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './projects.css'
const Projects = () => {
  return (
    <div id='projects'>
      <h5 className="project-title">my projects</h5>
      <div className="underline"></div>
      <div className="main-card-projects">
        
        <div className="card-projects">
          <h4 className='project-title'>React.js</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>html</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>Nodejs</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>Data Science</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>Graphic Design</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        
        </div>
        <div className="card-projects">
          <h4 className='project-title'>Mern Stack</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>MongoDb database</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
        <div className="card-projects">
          <h4 className='project-title'>css</h4>
          <div className='native'>
          <div className="rating"></div><span className='embend'></span>
        </div>
        </div>
       
      </div>
      
      <Link className='home-btn' smooth to='#home'  >Home</Link>
    </div>
  )
}

export default Projects