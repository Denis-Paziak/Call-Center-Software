import React from 'react';
import Header from "../Header/Header";
import Contacts from "../Contacts/Contacts";
import "./main.scss"

const Main = () => {
    return (
        <div className="main">
            <Header />
            <div className="container">
                <Contacts/>
            </div>
        </div>
    );
};

export default Main;
