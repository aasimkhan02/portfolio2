import React, { useState, useEffect } from 'react';
import './Home.css';
import '@lottiefiles/lottie-player';
import HealthWave from './../../assets/Doctor.jpg'
import AXWeather from './../../assets/Weather.jpg'
import QuizElite from './../../assets/Quiz.jpg'
import Marquee from "react-fast-marquee";

const Home = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [transform, setTransform] = useState({});

    const handleMouseMove = (e, index) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setTransform(prevState => ({
            ...prevState,
            [index]: `translate(${x * 0.3}px, ${y * 0.3}px)`
        }));
    };

    const handleMouseRemove = (index) => {
        setTransform(prevState => ({
            ...prevState,
            [index]: 'translate(0, 0)'
        }));
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setClickedIndex(null);
    };

    const handleClick = (index) => {
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
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
            <div className="Hero">
                <div className="Other-parts">
                    <h2
                        className='contact-link'
                        style={{ transform: transform['contact-link'] }}
                        onMouseMove={(e) => handleMouseMove(e, 'contact-link')}
                        onMouseLeave={() => handleMouseRemove('contact-link')}
                    >
                        Contact me
                    </h2>
                    <h1>Developer,<br /> Designer & Engineer</h1>
                </div>
                <Marquee className='hero-marquee' speed={130}>
                    <h1>Khan Mohd Aasim - </h1>
                </Marquee>
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
            {/* <div className="Skill Frame">
                <div className="Heading">
                    <h1>What I Do</h1>
                </div>
                <div className="Main-content">
                    {[
                        { skill: 'Frontend Development', details: ['Proficient in creating dynamic, user-friendly interfaces with modern frontend technologies.'], techstack: "HTML, CSS, Javascript, React, Bootstrap" },
                        { skill: 'Backend Development', details: ['Experienced in building scalable backend systems and working with databases and APIs.'], techstack: "Django, MySQL, SQLite" },
                        { skill: 'Machine Learning', details: ['Skilled in developing machine learning models and optimizing algorithms for predictive analysis.'], techstack: "Numpy, Pandas, Scikit-learn, Matplotlib" },
                        { skill: 'Programming', details: ['Proficient in multiple programming languages with strong problem-solving skills to build efficient solutions.'], techstack: "Python, C, Java, Javascript" },
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
                    <div className="Healthwave">
                        <img src={HealthWave} alt="" />
                        <div className="project-details">
                            <div className="project-title">
                                <p><span style={{fontWeight: "bold"}}>HealthWave </span>- A cutting-edge blend of health education,
                                AI predictions, and medication insights, redefining your well-being.</p>
                                <h2 style={{fontWeight: 400, color: '#717171'}}>Personal Project • 2024</h2>
                            </div>
                            <div className="project-description">
                                <p style={{fontSize: 21, color: '#717171'}}>HealthWave is a comprehensive platform designed to help users navigate their health journey 
                                    with ease. It combines detailed medication information, health prediction models, 
                                    and educational videos to offer valuable insights into managing and 
                                    understanding various health conditions. By providing accessible resources 
                                    and tools, HealthWave aims to empower users to make informed decisions and 
                                    take proactive steps in maintaining their well-being.
                                </p>
                                <ul className="project-techstack">
                                    <li>React</li>
                                    <li>Django</li>
                                    <li>SQLite</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="AXWeather">
                        <img src={AXWeather} alt="" />
                        <div className="project-details">
                            <div className="project-title">
                                <p><span style={{fontWeight: "bold"}}>AXWeather </span>- A dynamic platform offering 
                                accurate forecasts and interactive visualizations, empowering you to stay ahead of the weather.</p>
                                <h2 style={{fontWeight: 400, color: '#3e3e3e'}}>Personal Project • 2023</h2>
                            </div>
                            <div className="project-description">
                                <p style={{fontSize: 21, color: '#3e3e3e'}}>AXWeather is a versatile platform 
                                    crafted to keep users informed and ready for any weather conditions. 
                                    It provides precise forecasts and interactive tools to visualize 
                                    atmospheric patterns, ensuring a clear understanding of weather dynamics. 
                                    With its accessible and timely insights, AXWeather empowers users to plan 
                                    ahead, adapt to changes, and confidently navigate their day, no matter the forecast.
                                </p>
                                <ul className="project-techstack">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JAVASCRIPT</li>
                                    <li>API Integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="QuizElite">
                        <img src={QuizElite} alt="" />
                        <div className="project-details">
                            <div className="project-title">
                                <p><span style={{fontWeight: "bold"}}>QuizElite </span>- 
                                A dynamic hub for engaging quizzes, seamless hosting, and collaborative 
                                learning, transforming how you test and expand your knowledge.</p>
                                <h2 style={{fontWeight: 400, color: '#555555'}}>Personal Project • 2023</h2>
                            </div>
                            <div className="project-description">
                                <p style={{fontSize: 21, color: '#555555'}}>QuizElite is a versatile 
                                    platform designed to make learning and engagement both fun and 
                                    interactive. It offers a diverse range of quizzes across various 
                                    topics, along with tools to host your own or join others effortlessly.
                                    By fostering collaboration and challenge, QuizElite encourages 
                                    users to test their knowledge, share ideas, and connect with 
                                    others in an interactive learning environment. With its 
                                    accessible features, QuizElite transforms traditional 
                                    quizzing into an engaging and social experience for everyone.
                                </p>
                                <ul className="project-techstack">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Django</li>
                                    <li>Authentication</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;
