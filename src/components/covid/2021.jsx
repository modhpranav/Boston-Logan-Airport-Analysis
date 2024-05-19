import { useEffect, useState } from "react";
import { gsap } from "gsap";
import PssengerVsFlight21 from "./overall_passengers_flights_21";

const insights = [
  {
    title: "Post-Pandemic Revival",
    description:
      "In 2021, both passengers and flights show recovery with December passenger numbers at 2,072,499 and flights at 22,673, still below pre-pandemic levels of December 2019 (2,761,947 passengers and 27,872 flights), but showing a significant improvement from the lows of 2020.",
  },
  {
    title: "Comparison with Pre-Pandemic Highs",
    description:
      "Passenger counts in August 2019 (3.2M) vs. July 2022 (2.3M) show a 70% recovery. This highlights the lasting impact of the pandemic on travel and the global economy.",
  },
  {
    title: "Stability in Flights",
    description:
      "Flights stabilized quicker than passenger numbers, nearing pre-pandemic operational levels with 23,635 flights in November post-pandemic, compared to the pre-pandemic peak of 31,947 in August 2019.",
  },
  {
    title: "Seasonal Travel Peaks",
    description:
      "Post-pandemic data shows strong recovery during traditional vacation months, reflecting a possible shift toward more leisure travel.",
  },
];

export default function Narrative21() {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".dynamic-insight", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          setCurrentInsightIndex((prevIndex) => (prevIndex + 1) % insights.slice(2).length);
          gsap.to(".dynamic-insight", { duration: 1, opacity: 1 });
        },
      });
    }, 10000); // Change insight every 8 seconds (6 seconds visible + 1 second fade-out + 1 second fade-in)

    return () => clearInterval(interval);
  }, []);

  const staticInsights = insights.slice(0, 2);
  const dynamicInsight = insights.slice(2)[currentInsightIndex];

  return (
    <div className="flex flex-col">
      {/* Stats Container with centered and limited width */}
      <div className="stats shadow w-full md:w-3/4 lg:w-2/3 bg-transparent">
        <div className="stat">
          <div className="stat-title text-white">Total Domestic Flights</div>
          <div className="stat-value text-blue-400">219,329</div>
          <div className="stat-desc text-green-400">↗︎ 45,335 (26.1%)</div>
        </div>
        
        <div className="stat">
          <div className="stat-title text-white">Total Domestic Passengers</div>
          <div className="stat-value text-blue-400">20,040,839</div>
          <div className="stat-desc text-green-400">↗︎ 9,311,225 (86.8%)</div>
        </div>
        
        <div className="stat">
          <div className="stat-title text-white">Average Domestic AirFare</div>
          <div className="stat-value text-blue-400">$228.55</div>
          <div className="stat-desc text-red-400">↗︎ $38.31 (20.13%)</div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex w-full">
        {/* Carousel Container */}
        <div className="w-3/5 carousel rounded-box">
          {/* Carousel Slide 1 */}
          <div id="slide2021-1" className="carousel-item relative w-full">
            <PssengerVsFlight21 />
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2021-1" className="btn btn-circle">❮</a>
              <a href="#slide2021-2" className="btn btn-circle">❯</a>
            </div> */}
          </div>

          {/* Carousel Slide 2 */}
          <div id="slide2021-2" className="carousel-item relative w-full">
          </div>

          {/* Carousel Slide 3 */}
          <div id="slide2021-3" className="carousel-item relative w-full">
            <PssengerVsFlight21 />
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2021-2" className="btn btn-circle">❮</a>
              <a href="#slide2021-1" className="btn btn-circle">❯</a>
            </div> */}
          </div>
        </div>

        {/* Cards Container for 2021 */}
        <div className="w-2/5 flex flex-col p-4 ml-2 mt-4">
          {staticInsights.map((insight, index) => (
            <div key={index} className="card mb-4 glass">
              <div className="card-body">
                <h2 className="card-title text-white font-bold shadow-lg">{insight.title}</h2>
                <p className="text-blue-200 shadow-md text-xl">{insight.description}</p>
              </div>
            </div>
          ))}
          <div className="card mb-4 glass dynamic-insight">
            <div className="card-body">
              <h2 className="card-title text-white font-bold shadow-lg">{dynamicInsight.title}</h2>
              <p className="text-blue-200 shadow-md text-xl">{dynamicInsight.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
