import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [transform, setTransform] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMouseMove = (e, index) => {
        if (!isMenuOpen) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setTransform(prevState => ({
                ...prevState,
                [index]: `translate(${x * 0.7}px, ${y * 0.7}px)`
            }));
        }
    };

    const handleMouseLeave = (index) => {
        if (!isMenuOpen) {
            setTransform(prevState => ({
                ...prevState,
                [index]: 'translate(0, 0)'
            }));
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='Navbar'>
            <h2
                className='logo'
                style={{ transform: transform['logo'] }}
                onMouseMove={(e) => handleMouseMove(e, 'logo')}
                onMouseLeave={() => handleMouseLeave('logo')}
            >
                Aasim
            </h2>
            <div
                className="hamburger"
                onClick={toggleMenu}
            >
                &#9776;
            </div>
            <div className={`Nav-list ${isMenuOpen ? 'open' : ''}`}>
                <div className="close-btn" onClick={closeMenu}>
                    &times;
                </div>
                <h1 className='Nav-text'>Navigation Menu</h1>
                <hr />
                {['About', 'Skills', 'Projects'].map((item, index) => (
                    <h4
                        key={index}
                        style={{ transform: transform[index] }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        {item}
                    </h4>
                ))}
                <hr className='horizontal-line' />
                <div className="Resume2">
                    <h2>Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" /></h2>
                </div>
            </div>
            <div
                className="Resume"
                style={{ transform: transform['Resume'] }}
                onMouseMove={(e) => handleMouseMove(e, 'Resume')}
                onMouseLeave={() => handleMouseLeave('Resume')}
            >
                <h2>Resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" /></h2>
            </div>
        </div>
    );
};

export default Navbar;
