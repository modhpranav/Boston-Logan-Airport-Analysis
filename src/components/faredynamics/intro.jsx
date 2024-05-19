import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { Draggable } from 'gsap/Draggable';
import ScrollDownIndicator from '../../utils/scrollDownIndicator';

gsap.registerPlugin(Flip, Draggable);

export default function Intro({ navigate }) {
  const facts = [
    { id: 1, title: 'Seasonal Surge in Airfares', description: 'Boston’s airfares exhibit a distinct seasonal pattern, with prices peaking during the summer due to increased travel demand. This trend is influenced by vacation travelers and the beginning of the international tourist season, prompting airlines to raise prices in response to higher booking volumes.' },
    { id: 2, title: 'A Decade of Fare Fluctuations', description: 'Over the last ten years, Boston Logan International Airport has experienced varying airfare trends influenced by global economic conditions, airline policy changes, and shifts in passenger demand. These fluctuations provide a fascinating insight into the dynamic nature of the airline industry.' },
    { id: 3, title: 'The Cost of Recovery', description: 'Following significant economic events such as the 2008 global financial crisis and the 2020 pandemic, Boston\'s airline industry saw initial fare spikes as operations resumed. However, these were followed by periods of fare stabilization as airlines adjusted to new market conditions and restored passenger confidence.' },
    { id: 4, title: 'Leading the Skies', description: 'JetBlue Airways and Delta Air Lines dominate the airspace at Logan Airport, leveraging their extensive network and frequent schedules to influence overall fare structures and provide a variety of service options to both domestic and international destinations.' },
    { id: 5, title: 'Competitive Pricing Leaders', description: 'Southwest Airlines, known for its cost-effective travel options, plays a pivotal role in keeping domestic airfares competitive at Boston Logan. Their pricing strategies often lead other carriers to offer lower fares to remain competitive in key markets.' },
    { id: 6, title: 'Premium Routes\' Pricing', description: 'Flights to destinations like London and Paris from Boston are often priced higher due to their popularity and the additional operational costs associated with longer haul services. These routes are particularly prone to seasonal price hikes, reflecting their high demand among international travelers.' },
    { id: 7, title: 'Navigating Through High Seasons', description: 'During peak travel seasons, such as winter and summer holidays, airfares from Boston significantly increase. This is a direct response to higher travel demand, with airlines capitalizing on holiday travelers and the increased willingness of passengers to pay more for travel during these periods.' },
    { id: 8, title: 'Frequent Flights, Better Prices', description: 'Data shows that increased flight frequencies on specific routes correlate with lower airfares. This trend is likely due to heightened competition among airlines, which use frequent services as a strategy to capture larger market shares.' },
    { id: 9, title: 'New Horizons: Direct Asia Flights', description: 'Responding to a growing demand for travel to Asian destinations, airlines at Logan are considering new direct routes to cities like Beijing and Tokyo. This expansion could significantly affect airfare trends, introducing more competitive pricing and convenience for Boston-based travelers.' },
    { id: 10, title: 'The Tech Effect on Tickets', description: 'Modern advances in booking technologies have revolutionized how airlines price their tickets, introducing dynamic pricing models that adjust fares based on real-time data on demand, booking patterns, and even weather conditions. This makes pricing more flexible and often more personalized.' },
    { id: 11, title: 'Low-Cost, Long-Haul', description: 'The entry of low-cost carriers like Norwegian into the transatlantic market has disrupted traditional pricing models, making international travel more accessible and affordable. These airlines offer fewer frills but significantly lower fares, appealing to budget-conscious travelers.' },
    { id: 12, title: 'Five-Year Fare Faceoff', description: 'A comparison of current airfares with those from five years ago shows a downward trend in pricing at Boston Logan. This reduction is largely due to increased competition among airlines, more efficient service offerings, and better aircraft utilization.' }
  ];

  const [selectedFact, setSelectedFact] = useState(null);
  const factRefs = useRef([]);
  const modalRef = useRef(null);
  const hoverTimeouts = useRef([]);

  const showDetails = (index) => {
    const state = Flip.getState(factRefs.current);
    setSelectedFact(facts[index]);
    Flip.from(state, {
      duration: 0.1,
      scale: true,
      absolute: true,
      ease: 'power2.inOut',
      onComplete: () => {
        if (modalRef.current) {
          gsap.fromTo(
            modalRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.1, ease: 'power2.inOut' }
          );
          modalRef.current.style.visibility = 'visible';
        }
      }
    });
  };

  const hideDetails = () => {
    const state = Flip.getState(factRefs.current);
    setSelectedFact(null);
    Flip.from(state, {
      duration: 0.2,
      scale: true,
      absolute: true,
      ease: 'power2.inOut'
    });
  };

  useEffect(() => {
    factRefs.current.forEach((el, index) => {
      const randomX = Math.random() * window.innerWidth - 100;
      const randomY = Math.random() * window.innerHeight - 100;
      gsap.set(el, { x: randomX, y: randomY });
    });

    gsap.fromTo(
      factRefs.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, duration: 0.5, stagger: 0.5, ease: 'power2.inOut' }
    );

    Draggable.create(factRefs.current, {
      bounds: "body",
      inertia: true,
      onPress() {
        this.target.style.zIndex = 0;
      },
      onDragEnd() {
        this.target.style.zIndex = 0;
      }
    });

    // Apply GSAP zoom animation to each fact's background
    factRefs.current.forEach((el) => {
      gsap.to(el, {
        backgroundSize: "150%",
        duration: 5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  const handleMouseEnter = (index) => {
    hoverTimeouts.current[index] = setTimeout(() => {
      showDetails(index);
    }, 1000); // 1 second
  };

  const handleMouseLeave = (index) => {
    clearTimeout(hoverTimeouts.current[index]);
  };

  return (
    <div className="flex flex-col mt-12">
      <h1 className="text-4xl font-bold text-center mb-8"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 w-full">
        {facts.map((fact, index) => (
          <div
            key={index}
            data-tip={fact.title}
            className={`tooltip tooltip-secondary item flex items-center justify-center w-full h-48 rounded cursor-pointer text-white text-center bg-cover bg-center`}
            style={{ 
              backgroundImage: `url(/thumbnail${index + 1}.webp)`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            ref={(el) => factRefs.current[index] = el}
          ></div>
        ))}
      </div>

      {selectedFact && (
        <div className="fixed inset-0 z-50 overflow-y-auto w-full">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={hideDetails}></div>
            <div className="relative bg-gray-900 bg-opacity-75 rounded-lg shadow-xl w-full max-w-5xl max-h-5xl">
              <div className="hero bg-black bg-opacity-50 p-8 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img src={`/thumbnail${selectedFact.id}.webp`} className="max-w-sm rounded-box shadow-xl" alt="Hero" />
                  <div>
                    <h1 className="text-5xl font-bold">{selectedFact.title}</h1>
                    <p className="py-6">{selectedFact.description}</p>
                    <button 
                      onClick={hideDetails} 
                      className="btn btn-primary mt-4 self-center lg:self-start"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
