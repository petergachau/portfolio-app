import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
const About = () => {
  return (
    <div id='about'>
        <h4  className='about'>About me</h4>
        <div className="underline"></div>
        
        <div className="main-card">
          <h6 className='p'>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</h6>
          
          <div className="card">
            <h6 className='h3'>Roles:</h6>
            <li className='link'>Full Stack web and mobile development</li>
            <li className='link'>React and React Native</li>
            <li className='link'>Redux for State Mnanagement</li>
            <li className='link'>Managing database</li>
            <div className="space">........</div>
            <div className="options">

                    <button className='btn primary-btn'>Hire me</button> 
                    < a href='PETERGACHAU CV.pdf' download='PETERGACHAU CV.pdf' > <button className='btn highlighted-btn'>Get  Resume</button></a> 
                </div>
          </div>
        </div>
        <Link className='home-btn' smooth to='#home'  >Home</Link>

        </div>
    
  )
}

export default About


