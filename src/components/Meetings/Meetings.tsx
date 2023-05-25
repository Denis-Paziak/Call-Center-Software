import React from 'react';
import "./meetings.scss";

const Meetings = () => {
    return (
        <div className="meetings">
            <div className="title">
                <h2>Today, Meetings</h2>
            </div>
            <div className="monthBox">
                <div className="date">
                    <p>03</p>
                    <p>Mon</p>
                </div>
                <div className="date">
                    <p>04</p>
                    <p>Tue</p>
                </div>
                <div className="date">
                    <p>05</p>
                    <p>Wed</p>
                </div>
                <div className="date">
                    <p>06</p>
                    <p>Thu</p>
                </div>
                <div className="date">
                    <p>07</p>
                    <p>Fri</p>
                </div>


                <div className="date">
                    <p>08</p>
                    <p>Sat</p>
                </div>
                <div className="date">
                    <p>09</p>
                    <p>Sun</p>
                </div>

            </div>
            <div className="meetings">
                <div className="meetingBox">
                    <div className="time">
                        <p>08 am</p>
                    </div>
                    <div className="meeting">
                        <h2 className="title">
                            Digital Marketing
                        </h2>
                        <p>Online marketing, is the promotion of brands to connect.</p>
                    </div>
                </div>

                <div className="meetingBox">
                    <div className="time">
                        <p>10 am</p>
                    </div>
                    <div className="meeting">
                        <h2 className="title">
                            UI Development
                        </h2>
                        <p>A tech professional who carries out the process of conceiving, designing</p>
                    </div>
                </div>

                <div className="meetingBox">
                    <div className="time">
                        <p>11 am</p>
                    </div>
                    <div className="meeting">
                        <h2 className="title">
                            Data Analysis
                        </h2>
                        <p>A process for obtaining raw data, and subsequently converting</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meetings;
