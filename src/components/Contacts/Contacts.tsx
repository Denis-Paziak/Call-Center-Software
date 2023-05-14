import React from 'react';
import "./contacts.scss";

import user1 from "../../img/contacts/user1.png";
import user2 from "../../img/contacts/user2.png";
import user3 from "../../img/contacts/user3.png";
import user4 from "../../img/contacts/user4.png";
import user5 from "../../img/contacts/user5.png";
import user6 from "../../img/contacts/user6.png";
import user7 from "../../img/contacts/user7.png";

interface  iUser {
    avatar: string,
    name: string,
    color: string
}

const data: iUser [] = [
    {
        avatar: user1,
        name: "Annette B.",
        color: "orange"
    },
    {
        avatar: user2,
        name: "Cody F.",
        color: "violet"
    },
    {
        avatar: user3,
        name: "Guy H.",
        color: "blue"
    },
    {
        avatar: user4,
        name: "Jerome B.",
        color: "red"
    },
    {
        avatar: user5,
        name: "Kathryn M.",
        color: "green"
    },
    {
        avatar: user6,
        name: "Darrell S.",
        color: "blue"
    },
    {
        avatar: user7,
        name: "Albert F.",
        color: "blue"
    }
];

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="title">
                <h2>Contacts</h2>
                <p>Apr 2022</p>
            </div>
            <div className="row">
                {
                    data.map((el) => {
                        return   <div className={`contact ${el.color}`}>
                            <div className="avatar">
                                <img src={el.avatar} alt="avatar"/>
                            </div>
                            <p className="name">{el.name}</p>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default Contacts;
