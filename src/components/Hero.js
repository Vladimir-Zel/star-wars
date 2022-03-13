import React from 'react';
import {characters} from "../utils/Constants";

const Hero = props => {
    return (
        <section className="float-left w-25 mr-1 row">
            <img className="col-12" src={characters[props.hero].img} alt={characters[props.hero].name}/>
        </section>
    );
};

export default Hero;