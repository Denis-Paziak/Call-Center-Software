import React from 'react';
import "./setting.scss";

import { ReactComponent as Leave } from '../../img/leave.svg';
import { ReactComponent as Sun } from '../../img/Sun.svg';
import { ReactComponent as Moon } from '../../img/Moon.svg';

const Setting = () => {
    return (
        <div className="setting">
            <button>
                <Leave/>
            </button>
            <button>
                <Sun/>
            </button>
            <button>
                <Moon/>
            </button>
        </div>
    );
};

export default Setting;
