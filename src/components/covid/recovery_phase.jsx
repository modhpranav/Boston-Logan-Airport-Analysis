import Narrative22 from './2022';
import StatCard from './stat_chart';

export default function Recovery2022() {
    const passengers20 = [2355866, 2396375, 1354166, 88247, 194878, 416381, 661640, 622890, 562816, 707858, 679503, 688994];
    const passengers21 = [630196,650749,949747,1280027,1593260,1906682,2258412,2226866,1955244,2323971,2193186,2072499];
    const passengers22 = [1453400,1643626,2422516,2584027,2765186,2721833,2789609,2760217,2612780,2874834,2567517,2332365];

    const flights20 = [27392, 26093, 24423, 7245, 6561, 8976, 13812, 13034, 11118, 11683, 11928, 11729];
    const flights21 = [10422,9524,12860,14118,16206,19614,22085,22606,22343,23243,23635,22673];
    const flights22 = [20243,19646,24235,24965,26939,26246,28483,28533,27330,27759,26304,24241];

    const totalPassengers20 = passengers20.reduce((acc, val) => acc + val, 0);
    const totalPassengers21 = passengers21.reduce((acc, val) => acc + val, 0);
    const totalPassengers22 = passengers22.reduce((acc, val) => acc + val, 0);

    const totalFlights20 = flights20.reduce((acc, val) => acc + val, 0);
    const totalFlights21 = flights21.reduce((acc, val) => acc + val, 0);
    const totalFlights22 = flights22.reduce((acc, val) => acc + val, 0);

    const passengerPercentageChange = (totalPassengersCurrentYear, totalPassengersOtherYear) => ((totalPassengersCurrentYear - totalPassengersOtherYear) / totalPassengersOtherYear) * 100;
    const flightPercentageChange = (totalFlightsCurrentYear, totalFlightsOtherYear) => ((totalFlightsCurrentYear - totalFlightsOtherYear) / totalFlightsOtherYear) * 100;

    const percentagePassengerChange20 = passengerPercentageChange(totalPassengers22, totalPassengers20);
    const percentagePassengerChange21 = passengerPercentageChange(totalPassengers22, totalPassengers21);

    const percentageFlightChange20 = flightPercentageChange(totalFlights22, totalFlights20);
    const percentageFlightChange21 = flightPercentageChange(totalFlights22, totalFlights21);

    const formatNumber = (number) => new Intl.NumberFormat('en-US').format(number);
    return (
        <div className="relative min-h-screen bg-transparent flex flex-col items-start">
            {/* Stat Cards */}
            <div className="flex gap-8 mt-32">
                <StatCard 
                    title="Passengers in 2022 vs 2020" 
                    amount={`Total: ${formatNumber(totalPassengers22)}`} 
                    percentage={percentagePassengerChange20} 
                    chartData={[
                        { name: "Passengers in 2020", data: passengers20, color: "#FF6347" },
                        { name: "Passengers in 2022", data: passengers22, color: "#7E3BF2" }
                    ]}
                />
                <StatCard 
                    title="Passengers in 2022 vs 2021" 
                    amount={`Total: ${formatNumber(totalPassengers22)}`} 
                    percentage={percentagePassengerChange21} 
                    chartData={[
                        { name: "Passengers in 2021", data: passengers21, color: "#32CD32" },
                        { name: "Passengers in 2022", data: passengers22, color: "#7E3BF2" }
                    ]}
                />
                <StatCard 
                    title="Flights in 2022 vs 2020" 
                     amount={`Total: ${formatNumber(totalFlights22)}`} 
                    percentage={percentageFlightChange20} 
                    chartData={[
                        { name: "Flights in 2020", data: flights20, color: "#FF6347" },
                        { name: "Flights in 2022", data: flights22, color: "#7E3BF2" }
                    ]}
                />
                <StatCard 
                    title="Flights in 2022 vs 2021" 
                     amount={`Total: ${formatNumber(totalFlights22)}`} 
                    percentage={percentageFlightChange21} 
                    chartData={[
                        { name: "Flights in 2021", data: flights21, color: "#32CD32" },
                        { name: "Flights in 2022", data: flights22, color: "#7E3BF2" }
                    ]}
                />
            </div>
            {/* Narrative 2022 */}
            <div className="card h-[700px] w-full lg:card-side  shadow-xl px-4 lg:px-8">
                {/* Assuming Narrative22 is properly imported and implemented */}
                <Narrative22 />
            </div>
        </div>

    );
}
