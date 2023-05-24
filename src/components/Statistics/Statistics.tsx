import React from 'react';
import "./statistics.scss";

import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        "id": "1",
        "color": "#DF3670",
        "data": [
            {
                "x": "Jan",
                "y": 0
            },
            {
                "x": "Feb",
                "y": 1200
            },
            {
                "x": "Mar",
                "y": 1000
            },
            {
                "x": "Apr",
                "y": 500
            },
            {
                "x": "May",
                "y": 1600
            },
            {
                "x": "Jun",
                "y": 1500
            },
            {
                "x": "Jul",
                "y": 1000
            },
            {
                "x": "Aug",
                "y": 2500
            },
            {
                "x": "Sep",
                "y": 2000
            },
            {
                "x": "Oct",
                "y": 1300
            },
            {
                "x": "Nov",
                "y": 2500
            }
        ]
    },
    {
        "id": "2",
        "color": "hsl(44, 70%, 50%)",
        "data": [
            {
                "x": "Jan",
                "y": 444
            },
            {
                "x": "Feb",
                "y": 1300
            },
            {
                "x": "Mar",
                "y": 900
            },
            {
                "x": "Apr",
                "y": 1000
            },
            {
                "x": "May",
                "y": 500
            },
            {
                "x": "Jun",
                "y": 1100
            },
            {
                "x": "Jul",
                "y": 1200
            },
            {
                "x": "Aug",
                "y": 1500
            },
            {
                "x": "Sep",
                "y": 2000
            },
            {
                "x": "Oct",
                "y": 1600
            },
            {
                "x": "Nov",
                "y": 2000
            }
        ]
    },
];

const MyResponsiveLine =
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
    />;
const Statistics = () => {
    return (
        <div className="statistics">
            <div className="title">
                <div className="text">
                    <h2>Statistics</h2>
                    <p>May 2022</p>
                </div>
                <div className="sort">
                    <p className="text">Sort by:</p>
                    <p>Monthly
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                                <path d="M8.22929 0.937531L4.43136 5.00781L0.633423 0.937531" fill="#C4C4C4"/>
                            </svg>
                        </span>
                    </p>
                </div>
            </div>

            <div className="chart">
                {MyResponsiveLine}
            </div>

        </div>
    );
};

export default Statistics;
