import React from 'react';
import "./header.scss";

import user from "../../img/user.png";

import { ReactComponent as Work } from '../../img/Work.svg';
import { ReactComponent as Notification } from '../../img/Notification.svg';


const Header = () => {
    return (
        <div className="header">
            <div className="title">
                <div className="user">
                    <img src={user} alt=""/>
                </div>
                <div className="text">
                    <h2>Welcome Back, <span>Jenny Wilson👋</span></h2>
                    <p>Monthly Premium User</p>
                </div>
            </div>
            <div className="user-panel">
                <button>
                    <Work/>
                </button>
                <button>
                    <Notification />
                </button>
            </div>
        </div>
    );
};

export default Header;
