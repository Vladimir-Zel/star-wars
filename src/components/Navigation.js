import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import {Link} from "react-router-dom";

const Navigation = props => {
    return (
        <nav className="fixed-top ml-5">
            <ul className="nav">
                <Link to={`/${homePage}/${props.hero}`}>
                    <li className="nav-item btn btn-danger mx-1">Home</li>
                </Link>
                <Link to={`/${aboutMePage}/${props.hero}`}>
                    <li className="nav-item btn btn-danger mx-1">About me</li>
                </Link>
                <Link to={`/${starWarsPage}`}>
                    <li className="nav-item btn btn-danger mx-1">Star Wars</li>
                </Link>
                <Link to={`/${contactPage}`}>
                    <li className="nav-item btn btn-danger mx-1">Contact</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navigation;