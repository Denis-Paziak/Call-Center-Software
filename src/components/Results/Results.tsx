import React from 'react';
import "./results.scss";

import { ResponsivePie } from '@nivo/pie';

const data = [
    {
        "id": "1",
        "label": "1",
        "value": 40,
        "color": "hsl(234, 70%, 50%)"
    },
    {
        "id": "2",
        "label": "2",
        "value": 20,
        "color": "hsl(46, 70%, 50%)"
    },
    {
        "id": "3",
        "label": "3",
        "value": 30,
        "color": "hsl(119, 70%, 50%)"
    },
];

const MyResponsivePie =
    <ResponsivePie
        data={data}
        margin={{ top: 5, right:5, bottom:5, left: 5 }}
        startAngle={-180}
        innerRadius={0.9}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={0}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />;
const Results = () => {
    return (
        <div className="results">
            <div className="title">
                <h2>Results</h2>
                <div className="more">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="content">
                <div className="text">
                    <p>Successful Calls</p>
                    <p>Sales Services</p>
                </div>
                <div className="doughnut">
                    {MyResponsivePie}
                </div>
            </div>
        </div>
    );
};

export default Results;
