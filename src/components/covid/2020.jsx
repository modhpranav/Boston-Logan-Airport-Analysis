import { useEffect, useState } from "react";
import { gsap } from "gsap";
import PssengerVsFlight20 from "./overall_passengers_flights_20";

const insights = [
  {
    title: "Comparison with 2019",
    description:
      "By December 2020, passenger numbers had dropped 75% from December 2019 levels, falling from 2,761,947 to 688,994. Flight numbers also decreased by 58%, from 27,872 to 11,729. These reductions underscore the prolonged impact of the pandemic on air travel as of year-end 2020.",
  },
  {
    title: "Severe Impact on Passengers",
    description:
      "Passenger numbers plummeted by over 96% from February to April 2020, from 2,396,375 to just 88,247.",
  },
  {
    title: "Flight Operations Less Affected",
    description:
      "Despite a significant drop in passenger numbers, flight numbers decreased by approximately 72% during the same period, suggesting continued operations for purposes other than passenger transport.",
  },
  {
    title: "Gradual Recovery",
    description:
      "Both passengers and flights showed signs of gradual recovery toward the end of 2020, though still significantly below pre-pandemic levels.",
  },
];

export default function Narrative20() {
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
    }, 8000); // Change insight every 8 seconds (6 seconds visible + 1 second fade-out + 1 second fade-in)

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
          <div className="stat-value text-blue-400">173,994</div>
          <div className="stat-desc text-red-400">↘︎ 169,784 (49.4%)</div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Total Domestic Passengers</div>
          <div className="stat-value text-blue-400">10,729,614</div>
          <div className="stat-desc text-red-400">↘︎ 23,369,174 (68.5%)</div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Average Domestic AirFare</div>
          <div className="stat-value text-blue-400">$190.24</div>
          <div className="stat-desc text-green-400">↘︎ $51.28 (27.5%)</div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex w-full">
        {/* Carousel Container */}
        <div className="w-3/5 carousel rounded-box">
          {/* Carousel Slide 1 */}
          <div id="slide2019-1" className="carousel-item relative w-full">
            <PssengerVsFlight20 />
          </div>

          {/* Carousel Slide 2 */}
          <div id="slide2019-2" className="carousel-item relative w-full"></div>

          {/* Carousel Slide 3 */}
          <div id="slide2019-3" className="carousel-item relative w-full">
            <PssengerVsFlight20 />
          </div>
        </div>

        {/* Cards Container for 2019 */}
        {/* Cards Container for 2019 */}
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
