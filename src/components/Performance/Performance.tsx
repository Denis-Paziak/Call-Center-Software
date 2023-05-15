import React from 'react';
import "./performance.scss";

import performance1 from "../../img/Performance1.jpg";
import performance2 from "../../img/Performance2.jpg";

const Performance = () => {
    return (
        <div className="performance">
            <div className="title">
                <h2>Performance</h2>
                <div className="more">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="performance-item">
                <div className="icon">
                    <img src={performance1} alt="icon"/>
                </div>
                <div className="text">
                    <h2>ARI Team Performance</h2>
                    <p>5:12 pm  •  America</p>
                </div>
                <p className="progress">89.80%</p>
            </div>

            <div className="performance-item">
                <div className="icon">
                    <img src={performance2} alt="icon"/>
                </div>
                <div className="text">
                    <h2>Receiving Calls</h2>
                    <p>5:12 pm  •  Australia</p>
                </div>
                <p className="progress">90.20%</p>
            </div>
        </div>
    );
};

export default Performance;
