import React from 'react';
import Header from "../Header/Header";
import Contacts from "../Contacts/Contacts";
import "./main.scss"
import StatisticsCalls from "../StatisticsCalls/StatisticsCalls";
import Performance from "../Performance/Performance";
import Results from "../Results/Results";
import Statistics from "../Statistics/Statistics";
import Meetings from "../Meetings/Meetings";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="container">
                <Contacts/>
                <StatisticsCalls />
                <Performance />
                <Results />
                <Meetings />
                <Statistics />
            </div>
        </div>
    );
};

export default Main;
