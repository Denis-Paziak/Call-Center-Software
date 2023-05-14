import React from 'react';
import "./nav.scss";

import { ReactComponent as Category } from '../../img/Category.svg';
import { ReactComponent as Chart } from '../../img/Chart.svg';
import { ReactComponent as Activity } from '../../img/Activity.svg';
import { ReactComponent as User2 } from '../../img/2 User.svg';
import { ReactComponent as Chat } from '../../img/Chat.svg';
import { ReactComponent as Work } from '../../img/Work.svg';


const Nav = () => {
    return (
        <nav className="nav">

            <a href="#" className="fill">
                <Category />
            </a>

            <a href="#" className="stroke">
                <Chart/>
            </a>

            <a href="#" className="stroke">
                <Activity />
            </a>

            <a href="#" className="stroke">
                <User2/>
            </a>

            <a href="#" className="stroke">
                <Chat/>
            </a>

            <a href="#" className="stroke">
               <Work />
            </a>

        </nav>
    );
};

export default Nav;
