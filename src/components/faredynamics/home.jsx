import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import GetFare from './get_prices';
import Intro from './intro';
import ScrollDownIndicator from '../../utils/scrollDownIndicator';

gsap.registerPlugin(ScrollTrigger);

export default function Covid({ navigate }) {
  const fareintroref = useRef(null);
  const getPriceRef = useRef(null);
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
      duration: 1,
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
    gsap.fromTo(fareintroref.current,
      { opacity: 1, y: 0 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: fareintroref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onEnter: () => setShowScrollIndicator(true),
          onLeave: () => setShowScrollIndicator(false),
          onEnterBack: () => setShowScrollIndicator(true),
          onLeaveBack: () => setShowScrollIndicator(false),
        }
      });

    // Recovery Component animation
    gsap.fromTo(getPriceRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: getPriceRef.current,
          start: "top bottom", // start animation when the top of getPriceRef is at the bottom of the viewport
          end: "top top",
          scrub: true,
          onEnter: () => setShowScrollIndicator(false),
          onLeave: () => setShowScrollIndicator(true),
        }
      });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-16"> {/* Add padding to the top */}
      <div className="fixed top-0 left-0 right-0 z-10 p-4">
      <header className="fixed top-0 left-0 right-0 z-10 p-4 shadow-md bg-opacity-75">
        <h1 className="text-4xl font-bold text-center">Boston Logan Airport And The Air Fares</h1>
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
            onClick={() => handleButtonClick('/covidinsights', 1)}
            ref={el => buttonRefs.current[1] = el}
          >
            Impact of Covid on Boston Aviation
          </button>
        </div>
      </header>
      </div>
      <div ref={fareintroref} style={{ minHeight: '100vh' }}>
        <Intro />
      </div>
      <div ref={getPriceRef} style={{ minHeight: '100vh' }}>
        <GetFare />
      </div>
      {showScrollIndicator && <ScrollDownIndicator />}
    </div>
  );
}
