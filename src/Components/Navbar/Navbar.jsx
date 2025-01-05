import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <h2 className='logo' style={{color: 'black'}}>Aasim</h2>
            <div className="Nav-list">
                <h4>Home</h4>
                <h4>About</h4>
                <h4>Skills</h4>
                <h4>Projects</h4>
            </div>
            <div className="Resume" style={{color: 'black'}}>
                <h2>Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" /></h2>
            </div>

        </div>
    );
};

export default Navbar;
