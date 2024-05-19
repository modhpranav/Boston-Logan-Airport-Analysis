import React, { useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { MdRocketLaunch } from "react-icons/md";
import Facts from './components/facts';
import Covid from './components/covid/home';
import Fares from './components/faredynamics/home';

const background_img = "background.jpg";

function App() {
    const navigate = useNavigate(); // Hook for navigation
    const pageRef = useRef(null); // Reference for the page container

    const handleGetStarted = () => {
        // Create the page opacity animation
        gsap.to(pageRef.current, {
            duration: 2,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Create the rocket animation
        gsap.to("#rocketIcon", {
            duration: 2,
            x: 500, // Move the rocket 500px to the right
            y: -300, // Move the rocket 300px upwards
            scale: 20, // Scale the rocket to 20x
            opacity: 0, // Fade out the rocket
            ease: "power1.inOut",
            onComplete: () => navigate('/facts') // Navigate after animation completes
        });
    };

    return (
        <Routes>
            <Route path="/" element={
                <div ref={pageRef} className="h-screen" style={{
                    backgroundImage: `url(${background_img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="hero min-h-screen bg-base-200 bg-opacity-50">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://ia804604.us.archive.org/10/items/1980-logan-international-airport-and-the-boston-skyline-postcard/1980%20Logan%20International%20Airport%20and%20the%20Boston%20Skyline%20Postcard.jpg" className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold text-blue-400">Boston Airfare Chronicles</h1>
                                <p className="py-6 text-white text-2xl">Explore the evolving trends in air travel and fare structures at Boston Logan Airport from 2019 to 2024. Discover how the COVID-19 pandemic influenced flight operations, passenger traffic, and pricing strategies, and uncover insights to navigate future challenges in the aviation industry.</p>
                                <button className="btn w-64 btn-primary flex items-center" onClick={handleGetStarted}>
                                <span id="rocketIcon" className="mr-2">🚀</span> Get Started
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }/>
            <Route path="/facts" element={<Facts navigate={navigate} />} />
            <Route path="/covidinsights" element={<Covid navigate={navigate} />} />
            <Route path="/fareinsights" element={<Fares navigate={navigate} />} />
        </Routes>
    );
}

export default App;
