import React, { useEffect, useState } from 'react';
import './Home.css';
import Frame1Video from './../../assets/Frame1.mp4';

const Home = () => {
    const [typedText, setTypedText] = useState({
        h3: '',
        h1: '',
        h2: '', // For changing text
    });
    const [showCursor, setShowCursor] = useState(true); // Cursor visibility toggle
    const [currentStep, setCurrentStep] = useState(0); // Track typing stage
    const [currentH2Index, setCurrentH2Index] = useState(0); // Index of the current h2 text
    const changingText = ["A Web Developer", "A UI/UX Designer", "An AI Enthusiast", "A Python Developer", "A Problem Solver", "A Passionate Coder"];

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

        return () => clearInterval(cursorInterval); 
    }, [currentStep, currentH2Index]); 

    return (
        <div className='Home'>
            <div className="Card Frame1">
                <video autoPlay loop muted>
                    <source src={Frame1Video} type="video/mp4" />
                </video>
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
            <div className="Card About">
                <h1>Hello</h1>
            </div>
        </div>
    );
};

export default Home;
