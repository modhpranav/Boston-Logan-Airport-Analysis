import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function Facts({ navigate }) {
  const [currentFact, setCurrentFact] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const factsContainerRef = useRef([]);
  const descriptionRefs = useRef([]);
  const buttonRefs = useRef([]);
  const [scrollCount, setScrollCount] = useState(0);

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const facts = [
    {
      image: "https://media.licdn.com/dms/image/C4E22AQFY4-r0C_bo6Q/feedshare-shrink_800/0/1615536064553?e=2147483647&v=beta&t=3qr3CtA9g-eZKFGnzMUMy6GKI5cADor99AyVtQPENvo",
      title: "Adoption of Aviation Technology",
      description: "Boston Logan International Airport was one of the first airports in the United States to establish an air traffic control tower, dating back to 1941.",
    },
    {
      image: "https://images.findagrave.com/photos/2010/77/44142848_126904910273.jpg?size=photos250",
      title: "Renamed after a War Hero",
      description: "The airport was originally called Jeffery Field after the neighborhood it was located in. It was renamed in 1943 after General Edward Lawrence Logan, a war hero originally from South Boston.",
    },
    {
      image: "https://upgradedpoints.com/wp-content/uploads/2024/03/Boston-Airport-Boarding-Bus.jpg?auto=webp&disable=upscale&width=1200",
      title: "First Airport with a rapid transit connection",
      description: "In 1952, Logan became the first airport in the United States with a direct rapid transit connection to downtown Boston. The airport was connected by a dedicated rapid transit line from Airport Station on the Blue Line.",
    },
    {
      image: "https://media.wired.com/photos/5931115effe84b4a09f8f0e6/master/pass/LoganHP.jpg",
      title: "9/11 Memorial",
      description: "There is a 9/11 Memorial at Logan Airport. It is a 20-by-20-foot glass cube that glows with a soft light at night. Inside the cube are two glass panels etched with the names of the people who were on each flight.",
    },
    {
      image: "https://pbs.twimg.com/media/FrSHE3yXoAA2rfo.jpg:large",
      title: "First LEED-Certified Airport Terminal",
      description: "The new Terminal A was the first LEED certified building at Logan and the first certified building at a United States airport.",
    },
  ];

  useEffect(() => {
    descriptionRefs.current.forEach((desc, index) => {
      if (index === currentFact) {
        gsap.fromTo(desc, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        gsap.to(desc, { duration: 5, text: facts[index].description });
      } else {
        gsap.to(desc, { opacity: 0 });
      }
    });
  }, [currentFact]);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent the default scroll behavior
      const delta = event.deltaY || event.wheelDelta || 0;

      // Increment or decrement the scroll count based on scroll direction
      if (delta > 0) {
        setScrollCount(prev => prev + 1);
      } else if (delta < 0) {
        setScrollCount(prev => prev - 1);
      }

      // Change the fact every 10 scrolls
      if (Math.abs(scrollCount) >= 10) {
        setCurrentFact(prev => (delta > 0 ? (prev + 1) % facts.length : (prev - 1 + facts.length) % facts.length));
        setScrollCount(0);  // Reset scroll count after changing the fact
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollCount]);

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

  return (
    <div className="relative min-h-screen bg-transparent">
      <header className="fixed top-0 left-0 right-0 z-10 p-4 shadow-md bg-black bg-opacity-75">
        <h1 className="text-4xl font-bold text-center">Facts About Boston Logan International Airport</h1>
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-outline btn-primary mx-2 text-xl"
            onClick={() => handleButtonClick('/covidinsights', 0)}
            ref={el => buttonRefs.current[0] = el}
          >
            Impact of Covid on Boston Aviation
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

      <div className="pt-24 flex items-center justify-center min-h-screen">
        {facts.map((fact, index) => (
          <div
            ref={el => factsContainerRef.current[index] = el}
            key={index}
            className="hero-content flex flex-col lg:flex-row w-3/4 justify-center items-center"
            style={{ display: index === currentFact ? 'flex' : 'none' }}
          >
            <img
              src={fact.image}
              className="max-w-xl rounded-lg shadow-2xl cursor-pointer"
              alt={fact.title}
              onClick={() => setShowModal(true)}
            />
            <div className="lg:ml-6 p-5">
              <h1 className="text-5xl font-bold text-blue-400">{fact.title}</h1>
              <p ref={el => descriptionRefs.current[index] = el} className="py-6 text-3xl text-green-400 justify-left"></p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 w-full flex justify-center">
        <motion.div
          className="cursor-pointer p-2 bg-white bg-opacity-0 rounded-full hover:bg-opacity-40 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          onClick={() => setCurrentFact(prev => (prev + 1) % facts.length)}
        >
          <RiArrowRightDoubleFill size={50} className="text-white" />
        </motion.div>
      </div>
      
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20"
          onClick={() => setShowModal(false)}
        >
          <div className="relative p-4 max-w-3xl mx-auto">
            <img src={facts[currentFact].image} alt={facts[currentFact].title} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
