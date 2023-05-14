import React from 'react';
import "./statisticsCalls.scss";


interface istatisticsCallsItem {
    text: string,
    color: string,
    progress: string
}

const data : istatisticsCallsItem [] = [
    {
        text: "Web Designing",
        color: "blue",
        progress: "60%"
    },
    {
        text: "UI Development",
        color: "green",
        progress: "50%"
    }, {
        text: "Data Analysis",
        color: "red",
        progress: "30%"
    },

];
const StatisticsCalls = () => {
    return (
        <div className="statisticsCalls">
           <div className="title">
               <h2>Statistics Calls</h2>
           </div>


            {data.map((el) => {
                return  <div className="statisticsCalls-item">
                    <div className="title">
                        <p>{el.text}</p>
                        <p>{el.progress}</p>
                    </div>

                    <div className={`progress ${el.color}`}>
                        <div style={{width: el.progress}}></div>
                    </div>
                </div>
            })}

        </div>
    );
};

export default StatisticsCalls;
