import React from 'react'
import Typical from 'react-typical'
import { HashLink as Link } from 'react-router-hash-link'

import './Home.css'
const Home = () => {
  return (
    <div className="profile-container">
        
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon"><a href='https://m.facebook.com/arsene.diop.9'>
                       <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='a'>
                       <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.instagram.com/peter-gachau'>
                       <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://twitter.com/ridge_techs'>
                       <i className='fa fa-twitter'></i>
                    </a>
                    <a href='a'>
                       <i className='fa fa-youtube-square'></i>
                    </a>
                    </div>
                    
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {''}
                        Hello , am <span className="highlited-text">Peter</span>
                    </span>
                </div>
                <div className="pro">
                    <span className="primary-text">
                        {''}
                        <h1>
                            {''}
                            <Typical
                            loop={Infinity}
                            steps={[
                                'Fullstack web Dev ',
                                2000,
                                'Mern Stack Dev',
                                2000,
                                'react-Native Developer',
                                2000,
                                'DataScientist /python ',
                                2000,
                            ]}
                            />

                        </h1>
                        <span className="profile-role-tagline">Knack of building applications with front and back end operations.</span>
                    </span>
                </div>
                <div className="profile-options">
                 <Link to='#contact'>
                    <button className='btn primary-btn'>Hire me</button> 
                    </Link>
                    < a href='PETERGACHAU CV.pdf' download='PETERGACHAU CV.pdf' > <button className='btn highlighted-btn'>Get  Resume</button></a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home