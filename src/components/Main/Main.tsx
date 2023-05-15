import React from 'react';
import Header from "../Header/Header";
import Contacts from "../Contacts/Contacts";
import "./main.scss"
import StatisticsCalls from "../StatisticsCalls/StatisticsCalls";
import Performance from "../Performance/Performance";

const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="container">
                <Contacts/>
                <StatisticsCalls />
                <Performance />
            </div>
        </div>
    );
};

export default Main;
