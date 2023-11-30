import React, { useState } from "react";
import { Bar } from 'react-chartjs-2'
import Chart, { CategoryScale } from "chart.js/auto"
Chart.register(CategoryScale)


export default function Barchart() {
    const details = [28.5, 28.9, 26.7, 26.2, 28, 27.1]
    const label1 = ["fist", "second", "third", "fourth", "fifth", "Sixth"]
    const [chartData, setChartData] = useState(
        {

            labels: label1.map((data) => data),
            datasets: [
                {
                    label: "Users Gained",
                    data: label1.map((data, i) => details[i]),

                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "& quot; #ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#00FFFF",
                        "#FF8C00"
                    ],
                    borderColor: "black",
                    borderWidth: 1
                }

            ]

        }
    )



    return (
        <>
            <div className="App" style={{height:"100vh"}}>
                <Bar style={{ width:"700px", height: "100%" }}
                
                    data={chartData}
                    options={

                        {
                            responsive: true,
                            // plugins: {
                            //     title: {
                            //         display: true,
                            //         text: "Different Types Of Energy Gained"
                            //     },
                            //     legend: true,

                            // }
                            // ,

                            scales: {
                                y: {
                                    min: 25,
                                    max: 30,
                                    ticks:{
                                        stepSize:0.2
                                    }
                                }
                            }
                            // scales: {
                            //     xAxis: {
                            //         ticks: {
                            //             beginAtZero: true,
                            //             max: 1000,
                            //             min: 0
                            //         }
                            //     },
                            //     yAxis: {
                            //         ticks: {
                            //             beginAtZero: false,
                            //             max: 8,
                            //             min: -3
                            //         }
                            //     }
                            // }
                          

                        }}
                />

                {/* <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
                <div style={{ maxWidth: "650px" }}>
                    <Bar
                        data={{
                            // Name of the variables on x-axies for each bar 
                            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
                            datasets: [
                                {
                                    // Label for bars 
                                    label: "total count/value",
                                    // Data or value of your each variable 
                                    data: [1552, 1319, 613, 1400],
                                    // Color of each bar 
                                    backgroundColor: ["aqua", "green", "red", "yellow"],
                                    // Border color of each bar 
                                    borderColor: ["aqua", "green", "red", "yellow"],
                                    borderWidth: 0.5,
                                },
                            ],
                        }}
                        // Height of graph 
                        height={400}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            // The y-axis value will start from zero 
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            legend: {
                                labels: {
                                    fontSize: 15,
                                },
                            },
                        }}
                    />
                </div> */}
            </div>

        </>
    );
}
