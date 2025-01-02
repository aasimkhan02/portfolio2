import React, { useState, useEffect } from 'react';
import './Home.css';
import Frame1Video from './../../assets/Frame1.mp4';
import '@lottiefiles/lottie-player';

const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null); // State for the clicked section

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setClickedIndex(null); // Reset clickedIndex on mouse leave
    };

    const handleClick = (index) => {
        // If the clicked section is already selected, reset it
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index); // Set the clicked index
        }
    };

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const scrollAmount = event.deltaY * 0.2;
            window.scrollBy({
                top: scrollAmount,
                behavior: 'smooth',
            });
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="Home">
            <video className="Bg-video" autoPlay loop muted>
                <source src={Frame1Video} type="video/mp4" />
            </video>
            <div className="Hero">
                <h4 style={{ width: '100%', textAlign: 'Left', paddingLeft: '60px' }}>I &nbsp;AM</h4>
                <h1 style={{ width: '100%', textAlign: 'center', fontSize: '150px' }}>Aasim Khan</h1>
                <h3 style={{
                    textTransform: 'uppercase', wordSpacing: '5px', width: '100%',
                    textAlign: 'right', paddingRight: '60px', color: '#eb5939',
                    fontSize: '24px', letterSpacing: 1
                }}>
                    Crafting Code, Shaping Ideas
                </h3>
            </div>
            <div className="About Frame">
                <div className="Heading">
                    <h1>About me</h1>
                </div>
                <div className="Main-content">
                    <h1>
                        I'm a passionate developer with expertise in{' '}
                        <span style={{ color: '#FF3F00' }}>Web development and AI/ML</span>. I love creating innovative
                        solutions and crafting seamless user experiences.
                    </h1>
                </div>
            </div>
            <div className="Skill Frame">
                <div className="Heading">
                    <h1>What I Do</h1>
                </div>
                <div className="Main-content">
                    {[
                        { skill: 'Programming Languages', details: ['Proficient in multiple programming languages with strong problem-solving skills to build efficient solutions.'], techstack: "Python, C, Java, Javascript" },
                        { skill: 'Frontend Development', details: ['Proficient in creating dynamic, user-friendly interfaces with modern frontend technologies.'], techstack: "HTML, CSS, Javascript, React, Bootstrap" },
                        { skill: 'Backend Development', details: ['Experienced in building scalable backend systems and working with databases and APIs.'], techstack: "Django, MySQL, MySQLite" },
                        { skill: 'Machine Learning', details: ['Skilled in developing machine learning models and optimizing algorithms for predictive analysis.'], techstack: "Numpy, Pandas, Scikit-learn, Matplotlib" },
                        { skill: 'Tools', details: ['Proficient with tools that enhance productivity, version control, and deployment automation.'], techstack: "Figma, Jupyter Notebooks, Git, VS code" },
                    ].map((item, index) => (
                        <li
                            key={index}
                            className={item.skill === 'Tools' ? 'tools-section' : ''}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(index)} 
                            style={{
                                backgroundColor: clickedIndex === index ? 'black' : '',
                                color: clickedIndex === index ? 'white' : '',
                            }}
                        >
                            <h1 style={{ display: hoveredIndex === index ? 'none' : 'block' }}>{item.skill}</h1>
                            {hoveredIndex === index && clickedIndex !== index && (
                                <div className="details-container">
                                    {item.details.map((detail, idx) => (
                                        <span className="detail-item" key={idx}>
                                            {detail}
                                        </span>
                                    ))}
                                    <lottie-player
                                        src='./../../../public/assets/Animation - 1735631027967.json'
                                        background="transparent"
                                        speed="1"
                                        style={{ width: '100px', height: '100px', marginTop: '10px' }}
                                        loop
                                        autoplay
                                    />
                                </div>
                            )}
                            {clickedIndex === index && (
                                <div className="techstack-container">
                                    <span className="techstack">{item.techstack}</span>
                                </div>
                            )}
                        </li>
                    ))}
                </div>
            </div>
            <div className="Projects Frame">
                <div className="Heading">
                    <h1>My Projects</h1>
                </div>
                <div className="Main-content">
                    <div className="Healthcare">
                        <div className="Project-image"></div>
                        <div className="Project-content">
                            <h1 style={{ fontSize: '55px', color: 'white' }}>HealthWave</h1>
                            <h3 style={{ fontSize: '24px', color: 'rgb(180, 180, 180)' }}>
                                Personal Project <span style={{ margin: '0 8px' }}>•</span> 2024
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="Weather">
                            <div className="Project-image"></div>
                            <div className="Project-content">
                                <h1 style={{ color: 'black', fontSize: 40 }}>AXWeather</h1>
                                <h3 style={{ fontSize: 20 }}>
                                    Personal Project <span style={{ margin: '0 8px' }}>•</span> 2023
                                </h3>
                            </div>
                        </div>
                        <div className="Quiz">
                            <div className="Project-image"></div>
                            <div className="Project-content">
                                <h1 style={{ color: 'white', fontSize: 40 }}>QuizElite</h1>
                                <h3 style={{ fontSize: 20 }}>
                                    Personal Project <span style={{ margin: '0 8px' }}>•</span> 2023
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
