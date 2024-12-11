import React from 'react'
import './Navbar.css'
import Logo from './../../assets/logo.png'

const Navbar = () => {
    return (
        <div className='Navbar container'>
            <div className="logo">
                <img src={Logo} alt="" />
                <h1>AASIM</h1>
            </div>
            <div className="nav-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <button className='Resume btn'>Resume</button>
            </div>
        </div>
    )
}

export default Navbar;
