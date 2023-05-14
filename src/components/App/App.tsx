import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import "../../style.scss";
import Main from "../Main/Main";

const App = () => {
    return (
        <div className="wrapper">
            <Sidebar/>
            <Main/>
        </div>
    );
};

export default App;
