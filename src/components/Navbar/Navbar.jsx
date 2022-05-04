import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="na">
        
        <div className="navv-links">
        <Link  smooth to='#home' className="navh-link" >Home</Link>
            <Link  smooth to='#about' className="navh-link" >About me</Link>
            <Link smooth to='#contact' className="navh-link">Contact</Link>
            <Link smooth to='#projects' className="navh-link">Projects</Link>
            
        </div>
        <div className="content"></div>
    </div>
  )
}

export default Navbar