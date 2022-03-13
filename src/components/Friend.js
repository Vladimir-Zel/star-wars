import React from 'react';
import style from './friend.module.css';
import {characters, homePage} from "../utils/Constants";
import {Link} from "react-router-dom";
import {SWContext} from "../utils/SWContext";

const Friend = (props) => {
    let styles = "w-100 p-1 ";
    // eslint-disable-next-line default-case
    switch (props.index) {
        case 7:
            styles += style.bottomLeft;
            break;
        case 9:
            styles += style.bottomRight;
            break;
    }
    return (
        <Link className='col-4' to={`/${homePage}/${props.friend}`}>
            <img className={styles}
                 src={characters[props.friend].img} alt={characters[props.friend].name}/>
        </Link>
    );
};

export default Friend;