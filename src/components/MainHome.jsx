import React from 'react'
import About from './About/About'
import Footer from './Home/footer/Footer'
import Home from './Home/Home';
import Contact from './Contact/Contact';
import './main.css';



import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
const MainHome = () => {
  return (
      <> 
      <div className='home-container' id='home'>
       <Navbar/>
       <Home/>
        
        <Footer/>   
         </div>
         <About/>
         {/* <ContactForm/> */}
         <div className="underline-body"></div>
         <h5 className='hire' >Hire Me</h5>
         <div className="underline"></div>
         <Contact/>
         <div className="underline-body"></div>
         <Projects/>
         
      </>
   
  )
}

export default MainHome