import React, { useEffect, useState } from 'react';
import './Home.css';
import Frame1Video from './../../assets/Frame1.mp4';
import { color } from 'three/webgpu';

const Home = () => {
    const [typedText, setTypedText] = useState({
        h3: '',
        h1: '',
        h2: '', // For changing text
    });
    const [showCursor, setShowCursor] = useState(true); // Cursor visibility toggle
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentStep, setCurrentStep] = useState(0); // Track typing stage
    const [currentH2Index, setCurrentH2Index] = useState(0); // Index of the current h2 text
    const changingText = ["A Web Developer", "A UI/UX Designer", "An AI Enthusiast", "A Python Developer", "A Problem Solver", "A Passionate Coder"];

    // Smooth scroll function
    const smoothScroll = (event) => {
        event.preventDefault(); // Prevent default scroll behavior

        const scrollContainer = document.documentElement || document.body;
        const deltaY = event.deltaY;

        const currentScrollPosition = scrollContainer.scrollTop;
        const targetScrollPosition = currentScrollPosition + deltaY * 0.7; // Adjust 0.5 for speed

        // Smooth scroll animation
        window.requestAnimationFrame(function scroll() {
            if (Math.abs(scrollContainer.scrollTop - targetScrollPosition) > 1) {
                const step = (targetScrollPosition - scrollContainer.scrollTop) / 5; // Adjust 5 for smoothness
                scrollContainer.scrollTop += step;
                window.requestAnimationFrame(scroll);
            } else {
                scrollContainer.scrollTop = targetScrollPosition; // Ensure we hit the target
            }
        });
    };

    const typeWriterEffect = (element, text, speed, callback) => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => ({
                ...prev,
                [element]: text.slice(0, i + 1), // Typing logic
            }));
            i++;
            if (i === text.length) {
                clearInterval(interval);
                callback && callback();
            }
        }, speed);
    };

    const deleteWriterEffect = (element, speed, callback) => {
        const interval = setInterval(() => {
            setTypedText((prev) => {
                const currentText = prev[element];
                if (currentText.length > 0) {
                    return { ...prev, [element]: currentText.slice(0, -1) }; // Deleting logic
                } else {
                    clearInterval(interval);
                    callback && callback();
                    return prev;
                }
            });
        }, speed);
    };

    useEffect(() => {
        // Toggle cursor visibility for blinking effect
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        // Add scroll event listener for smooth scrolling
        window.addEventListener('wheel', smoothScroll, { passive: false });

        // Start typing sequence
        if (currentStep === 0) {
            typeWriterEffect('h3', "Hi! I'm", 100, () => setCurrentStep(1));
        } else if (currentStep === 1) {
            typeWriterEffect('h1', 'Khan Mohd Aasim', 100, () => setCurrentStep(2));
        } else if (currentStep === 2) {
            // Start typing the first h2 text
            const currentText = changingText[currentH2Index];
            typeWriterEffect('h2', currentText, 100, () => {
                setTimeout(() => {
                    deleteWriterEffect('h2', 100, () => {
                        setCurrentH2Index((prevIndex) => (prevIndex + 1) % changingText.length);
                    });
                }, 2000);
            });
        }

        return () => {
            clearInterval(cursorInterval); // Cleanup cursor interval
            window.removeEventListener('wheel', smoothScroll); // Remove scroll event listener
        };
    }, [currentStep, currentH2Index]);

    
    const handleMouseEnter = (index) => {
        setHoveredIndex(index); // Set the hovered index
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); // Reset when mouse leaves
    };


    return (
        <div className='Home'>
            <video className='Bg-video' autoPlay loop muted>
                    <source src={Frame1Video} type="video/mp4" />
            </video>
            <div className="Hero Frame">
                <div className="overlay">
                    <h3>
                        {typedText.h3}
                        {currentStep === 0 && showCursor && <span className="cursor">|</span>}
                    </h3>
                    <h1>
                        {typedText.h1}
                        {currentStep === 1 && showCursor && <span className="cursor">|</span>}
                    </h1>
                    <div className="changing-text">
                        <h2>
                            {typedText.h2}
                            {currentStep === 2 && showCursor && <span className="cursor">|</span>}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="About Frame">
                <div className="Heading">
                    <h1>About me</h1>
                </div>
                <div className="Main-content">
                    <h1>I'm passionate developer
                        with expertise in <span style={{color: '#FF3F00'}}>Web development and AI/ML</span>. 
                        I love creating innovative 
                        solutions and crafting seamless user experiences.
                    </h1>
                </div>
            </div>
            <div className="Skill Frame">
                <div className="Heading">
                    <h1>My Skillset</h1>
                </div>
                <div className="Main-content">
                    {['Programming Languages', 'Frontend Development', 'Backend Development', 'Machine Learning', 'Tools'].map((skill, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)} // Set the hovered index
                            onMouseLeave={handleMouseLeave} // Reset on hover out
                        >
                            <h1 style={{ display: hoveredIndex === index ? 'none' : 'block' }}>{skill}</h1>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
