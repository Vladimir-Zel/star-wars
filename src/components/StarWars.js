import React from 'react';
import {starsWarsInfo} from "../utils/Constants";
import style from "./fargalaxy.module.css";

const StarWars = () => {
    return (
        <div className={style.farGalaxy}>
            <p>{starsWarsInfo}</p>
        </div>
    );
};

export default StarWars;