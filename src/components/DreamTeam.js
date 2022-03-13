import React from 'react';
import {friends} from "../utils/Constants";
import Friend from "./Friend";

const DreamTeam = props => {
    const fignyas = friends.filter(item => item !== props.hero);
    return (
        <section className="float-right w-50 row border border-light no-gutters rounded-bottom ml-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {fignyas.map((item, index) => <Friend friend={item} key={index} index={index + 1}/>)}
        </section>
    );
};

export default DreamTeam;