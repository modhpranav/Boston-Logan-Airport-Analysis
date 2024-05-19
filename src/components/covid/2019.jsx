import PssengerVsFlight19 from "./overall_passengers_flights_19";

export default function Narrative19() {
  return (
    <div className="flex flex-col">
      {/* Stats Container with centered and limited width */}
      <div className="stats shadow w-full md:w-3/4 lg:w-2/3 bg-transparent">
        <div className="stat">
          <div className="stat-title text-white">Total Domestic Flights</div>
          <div className="stat-value text-blue-400">343,778</div>
          <div className="stat-desc text-green-400">↗︎ 4,373 (1.2%)</div>
        </div>
        
        <div className="stat">
          <div className="stat-title text-white">Total Domestic Passengers</div>
          <div className="stat-value text-blue-400">34,098,788</div>
          <div className="stat-desc text-green-400">↗︎ 852,908 (2.6%)</div>
        </div>
        
        <div className="stat">
          <div className="stat-title text-white">Average Domestic AirFare</div>
          <div className="stat-value text-blue-400">$241.52</div>
          <div className="stat-desc text-red-400">↗︎ $2.74 (1.1%)</div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex w-full">
        {/* Carousel Container */}
        <div className="w-3/5 carousel rounded-box">
          {/* Carousel Slide 1 */}
          <div id="slide2019-1" className="carousel-item relative w-full">
            <PssengerVsFlight19 />
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2019-1" className="btn btn-circle">❮</a>
              <a href="#slide2019-2" className="btn btn-circle">❯</a>
            </div> */}
          </div>

          {/* Carousel Slide 2 */}
          <div id="slide2019-2" className="carousel-item relative w-full">
            {/* <BarExample /> */}
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2019-1" className="btn btn-circle">❮</a>
              <a href="#slide2019-3" className="btn btn-circle">❯</a>
            </div> */}
          </div>

          {/* Carousel Slide 3 */}
          <div id="slide2019-3" className="carousel-item relative w-full">
            <PssengerVsFlight19 />
            {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2019-2" className="btn btn-circle">❮</a>
              <a href="#slide2019-1" className="btn btn-circle">❯</a>
            </div> */}
          </div>
        </div>

        {/* Cards Container for 2019 */}
        <div className="w-2/5 flex flex-col p-4 ml-2 mt-4">
  <div className="card mb-4 glass">
    <div className="card-body">
      <h2 className="card-title text-white font-bold shadow-lg">Flight Capacity vs. Passenger Numbers</h2>
      <p className="text-blue-200 shadow-md text-xl">The month with the highest number of flights is August (31,947 flights), closely followed by October (31,074 flights).</p>
      <p className="text-blue-200 shadow-md text-xl">Interestingly, even though October has a high number of flights, it does not correspond to the peak number of passengers, which might indicate either less popular travel destinations or possibly more frequent but less filled flights.</p>
    </div>
  </div>
  <div className="card mb-4 glass">
    <div className="card-body">
      <h2 className="card-title text-white font-bold shadow-lg">Overall Growth in Passenger Traffic</h2>
      <p className="text-blue-200 shadow-md text-xl">Total passenger numbers increased steadily over 2019, with a significant year-end rise from 2,182,856 in January to 2,761,947 in December, marking an overall increase of 26.5%.</p>
    </div>
  </div>
  <div className="card mb-4 glass">
    <div className="card-body">
      <h2 className="card-title text-white font-bold shadow-lg">End-of-Year Surge</h2>
      <p className="text-blue-200 shadow-md text-xl">There was a notable increase in both passengers and flights towards the end of the year, with December showing substantial growth, reaching 2,761,947 passengers.</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
