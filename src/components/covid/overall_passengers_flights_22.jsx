import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import React, { useState } from 'react';
  
  const normalizeData = (data) => {
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  return data.map(val => (val - minVal) / (maxVal - minVal));
  };
  
  
  
  export default function PssengerVsFlight22() {
    const [showAll, setShowAll] = useState(false);
    const [showPassengers, setShowPassengers] = useState(true);
    const [showFlights, setShowFlights] = useState(true);
    const toggleCondition = (condition) => {
        if (condition === 'passengers') {
            setShowPassengers(!showPassengers);
        }else if (condition === 'flights') {
            setShowFlights(!showFlights);
        }else if (condition === 'all') {
            setShowAll(!showAll);
        }
      };
    
      const passengers20 = [2355866, 2396375, 1354166, 88247, 194878, 416381, 661640, 622890, 562816, 707858, 679503, 688994];
      const flights20 = [27392, 26093, 24423, 7245, 6561, 8976, 13812, 13034, 11118, 11683, 11928, 11729];
      const passengers21 = [630196,650749,949747,1280027,1593260,1906682,2258412,2226866,1955244,2323971,2193186,2072499];
      const flights21 = [10422,9524,12860,14118,16206,19614,22085,22606,22343,23243,23635,22673];
      const passengers19 = [2182856, 2249783, 2818148, 2930447, 3092419, 3088289, 3170540, 3211932, 2811725, 3075491, 2705211, 2761947];
      const flights19 = [24717, 23464, 27831, 28535, 29917, 29733, 30529, 31947, 29714, 31074, 28445, 27872];
      const passengers = [1453400,1643626,2422516,2584027,2765186,2721833,2789609,2760217,2612780,2874834,2567517,2332365];
      const flights = [20243,19646,24235,24965,26939,26246,28483,28533,27330,27759,26304,24241];
    
      const chartConfig = {
      type: "line",
      height: 400,
      series: [
        ...(
            showPassengers ? [
                ...(showAll ? [
                    { name: "Passengers in 2022", data: normalizeData(passengers) },
                    { name: "Passengers in 2019", data: normalizeData(passengers19) },
                    // Uncomment to include 2020 data
                    // { name: "Passengers in 2020", data: normalizeData(passengers20) },
                ] : [
                    { name: "Passengers in 2022", data: normalizeData(passengers) },
                ])
            ] : []
        ),
        ...(
            showFlights ? [
                ...(showAll ? [
                    { name: "Flights in 2022", data: normalizeData(flights) },
                    { name: "Flights in 2019", data: normalizeData(flights19) },
                    // Uncomment to include 2020 data
                    // { name: "Flights in 2020", data: normalizeData(flights20) },
                ] : [
                    { name: "Flights in 2022", data: normalizeData(flights) },
                ])
            ] : []
        )
    ],
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        tooltip: {
          theme: "dark",
          y: {
            formatter: (value, { seriesIndex, dataPointIndex, w }) => {
              return seriesIndex === 0 ? `${passengers[dataPointIndex].toLocaleString()} Passengers` : `${flights[dataPointIndex].toLocaleString()} Flights`;
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#020617", "#ff6347", "#0077cc", "#33cc33", "#ffd700", "#800080"],
        stroke: {
          lineCap: "round",
          curve: "smooth"
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400
            }
          }
        },
        yaxis: {
          tickAmount: 6,
          labels: {
            formatter: (value) => `${(value * 100).toFixed(0)}%`,
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400
            }
          }
        },
        grid: {
          show: true,
          borderColor: "#dddddd",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: 5,
            right: 20
          }
        },
        fill: {
          opacity: 0.8
        }
      }
      };
    
    return (
    <Card className="w-full mt-8 rounded-box">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="ml-4">
          <Typography variant="h6" color="black" className="text-2xl font-bold">
            Passengers and Flights in 2022 (Post-Pandemic) And 2019 (Pre-Pandemic)
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="text-xl font-normal"
          >
            A line chart showing normalized data for passengers and flights.
          </Typography>
          <Typography>
          <div className="flex items-center space-x-2">
  <button onClick={() => toggleCondition('all')} className="btn btn-outline btn-info btn-sm">{showAll ? 'Hide 2019 Data' : 'Show 2019 Data'}</button>
  <label className="flex items-center space-x-2">
    <span>Show Passengers Data</span>
    <input type="checkbox" className="toggle toggle-success" onChange={() => toggleCondition("passengers")} checked={showPassengers} />
  </label>
  <label className="flex items-center space-x-2">
    <span>Show Flights Data</span>
    <input type="checkbox" className="toggle toggle-success" onChange={() => toggleCondition("flights")} checked={showFlights} />
  </label>
</div>

            </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
    );
}
  