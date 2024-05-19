import React, { useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Narrative19 from './2019';
import Narrative20 from './2020';
import Narrative21 from './2021';

export default function CovidTime({ navigate }) {
  const [activeYear, setActiveYear] = useState('intro');

  const getButtonClass = (year) => {
    let classes = "block w-full text-left mb-4 btn btn-outline btn-wide btn-lg font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl";
    if (activeYear === year) {
      classes += " btn-success";
    }
    return classes;
  };

  return (
    <div className="relative min-h-screen bg-transparent flex flex-col items-center pt-24">

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 sm:px-6 md:px-8" style={{ zIndex: 10 }}>
        <button onClick={() => setActiveYear('2019')} className={getButtonClass('2019')}>2019</button>
        <button onClick={() => setActiveYear('2020')} className={getButtonClass('2020')}>2020</button>
        <button onClick={() => setActiveYear('2021')} className={getButtonClass('2021')}>2021</button>
      </div>

      <div className="absolute top-1/2 left-[10%] right-0 transform -translate-y-1/2 px-4 sm:px-6 md:px-8 lg:px-16">
        {activeYear === 'intro' && (
          <div className="hero h-[400px] sm:h-[500px] md:h-[600px] rounded-box bg-cover bg-center" style={{ backgroundImage: 'url(/test.webp)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-xl font-bold text-cyan-400">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">Boston Logan Airport And Covid Pandemic</h1>
                <p className="py-6 text-lg sm:text-xl md:text-2xl text-yellow-200">Explore the ebb and flow of flight and passenger traffic at Boston Logan Airport before, during, and after the COVID-19 pandemic.</p>
                <button className="btn w-48 sm:w-56 md:w-64 btn-primary" onClick={() => setActiveYear('2019')}>Start with 2019</button>
              </div>
            </div>
          </div>
        )}

        {activeYear === '2019' && (
          <Narrative19 />
        )}

        {activeYear === '2020' && (
          <Narrative20 />
        )}

        {activeYear === '2021' && (
          <Narrative21 />
        )}
      </div>
      
    </div>
  );
}
