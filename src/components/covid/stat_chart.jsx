import React from 'react';
import Chart from 'react-apexcharts';

export default function StatCard({ title, amount, percentage, chartData }) {
    const options = {
        chart: {
            type: 'area',
            toolbar: { show: false },
            height: '100%',
            maxWidth: '100%',
        },
        grid: { show: false },
        series: chartData,
        tooltip: { enabled: true, x: { show: false } },
        legend: { show: true, labels: { colors: ['white'], useSeriesColors: true } },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: { enabled: false },
        stroke: { width: 6 },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { show: false },
    };

    const isPositive = percentage >= 0;
    const percentageColor = isPositive ? 'text-green-500' : 'text-red-500';
    const arrowPath = isPositive ? 'M5 13V1m0 0L1 5m4-4 4 4' : 'M5 1v12m0 0L1 9m4 4 4-4';

    return (
        <div className="max-w-lg w-full h-auto bg-black rounded-lg shadow p-4 md:p-6">
            <div className="flex justify-between mb-5">
                <div>
                    <h5 className="leading-none text-3xl font-bold text-white pb-2">{amount}</h5>
                    <p className="text-base font-normal text-white">{title}</p>
                </div>
                <div className={`flex items-center px-2.5 py-0.5 text-base font-semibold ${percentageColor} text-center`}>
                    {percentage.toFixed(2)}%
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 14" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={arrowPath} />
                    </svg>
                </div>
            </div>
            <div id="grid-chart">
                <Chart options={options} series={chartData} type="area" height={150} width={350}/>
            </div>
        </div>
    );
}
