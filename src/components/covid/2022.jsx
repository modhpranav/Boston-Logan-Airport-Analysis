import PssengerVsFlight22 from "./overall_passengers_flights_22";

export default function Narrative22() {
  return (
    <div className="flex w-full h-full pb-8"> {/* Added padding-bottom */}
      {/* Carousel Container */}
      <div className="flex-1 carousel rounded-box">
        {/* Carousel Slide 1 */}
        <div id="slide2019-1" className="carousel-item relative w-full">
          <PssengerVsFlight22 />
        </div>
      </div>

      <div className="w-2/5 flex flex-col p-4 ml-2 mt-4">
        <div className="card mb-4 glass">
          <div className="card-body">
            <h2 className="card-title text-white font-bold shadow-lg">Near Full Recovery in 2022</h2>
            <p className="text-blue-200 shadow-md text-xl">In 2022, passenger and flight counts neared 2019 levels with October passenger numbers reaching 2,874,834 and flights at 28,533, closely approaching the pre-pandemic peak of October 2019 (3,211,932 passengers and 31,947 flights), highlighting a robust rebound in aviation activities.</p>
          </div>
        </div>
        <div className="card mb-4 glass">
          <div className="card-body">
            <h2 className="card-title text-white font-bold shadow-lg">Sustained Seasonal Peaks</h2>
            <p className="text-blue-200 shadow-md text-xl">Summer months in both 2019 and 2022 showed the highest travel activity, indicating stable demand for leisure travel.</p>
          </div>
        </div>
        <div className="card mb-4 glass">
          <div className="card-body">
            <h2 className="card-title text-white font-bold shadow-lg">Efficiency Gains</h2>
            <p className="text-blue-200 shadow-md text-xl">Despite fewer flights in 2022 compared to 2019, the passenger volume per flight has increased, indicating enhanced operational efficiency and optimized flight capacities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
