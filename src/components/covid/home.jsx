import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CovidTime from './covid_analysis';
import Recovery22 from './recovery_phase';
import ScrollDownIndicator from '../../utils/scrollDownIndicator';

gsap.registerPlugin(ScrollTrigger);

export default function Covid({ navigate }) {
  const insightsRef = useRef(null);
  const recoveryRef = useRef(null);
  const buttonRefs = useRef([]);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const handleButtonClick = (path, index) => {
    const button = buttonRefs.current[index];
    const rect = button.getBoundingClientRect();
    const centerY = window.innerHeight / 2 - rect.height / 2;

    gsap.set(button, {
      position: 'absolute',
      top: rect.top,
      left: rect.left,
      zIndex: 1000, // Ensure it is on top of everything
    });

    gsap.to(button, {
      y: centerY - rect.top,
      duration: 0.8,
      rotate: 360,
      onComplete: () => {
        gsap.to(button, {
          opacity: 0,
          duration: 0.2,
          onComplete: () => navigate(path)
        });
      }
    });
  };

  useEffect(() => {
    // Insights Component animation
    gsap.fromTo(insightsRef.current, 
      { opacity: 1, y: 0 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: insightsRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onLeave: () => setShowScrollIndicator(false), // Hide scroll indicator when covidtime component is out of view
          onEnterBack: () => setShowScrollIndicator(true), // Show scroll indicator when scrolling back up to covidtime component
        }
      });

    // Recovery Component animation
    gsap.fromTo(recoveryRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: recoveryRef.current,
          start: "top bottom", // start animation when the top of recoveryRef is at the bottom of the viewport
          end: "top top",
          scrub: true,
        }
      });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10 p-4 shadow-md bg-black bg-opacity-75">
        <h1 className="text-4xl font-bold text-center">Boston Logan Airport And The COVID-19 Pandemic</h1>
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-outline btn-primary mx-2 text-xl"
            onClick={() => handleButtonClick('/facts', 0)}
            ref={el => buttonRefs.current[0] = el}
          >
            Home
          </button>
          <button
            className="btn btn-outline btn-primary mx-2 text-xl"
            onClick={() => handleButtonClick('/fareinsights', 1)}
            ref={el => buttonRefs.current[1] = el}
          >
            Fare Dynamics on Boston Routes
          </button>
        </div>
      </header>
      <div ref={insightsRef} className="pt-12">
        <CovidTime />
      </div>
      <div ref={recoveryRef} className="pt-32">
        <Recovery22 />
      </div>
      {showScrollIndicator && <ScrollDownIndicator />}
    </div>
  );
};
