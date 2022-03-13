import React from 'react';
import Home from "./Home";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import {Switch, Route} from "react-router-dom";
import ErrorPage from "./ErrorPage";


const Main = props => {
    return (
        <Switch>
            <Route path={['/', `/${homePage}`, `/${homePage}/:hero`]} exact render={(routeProps) => <Home {...routeProps} changeHero={props.changeHero}/>}/>
            <Route path={[`/${aboutMePage}`,`/${aboutMePage}/:hero`]} exact render={(routeProps) => <AboutMe {...routeProps} changeHero={props.changeHero}/>}/>
            <Route path={`/${starWarsPage}`} exact component={StarWars}/>
            <Route path={`/${contactPage}`} exact component={Contact}/>
            <Route component={ErrorPage}/>
        </Switch>
    )
};

export default Main;