import React, {useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {defaultHero, friends} from "../utils/Constants";

const Home = (props) => {

    useEffect(() => {
            let key = props.match.params.hero;
            if (!friends.includes(key)) {
                key = defaultHero;
            }
            props.changeHero(key);
        }, [props.match.params.hero]
    )


    // useEffect(() => {
    //         props.changeHero(props.match.params.hero);
    //     }, [props.match.params.hero]
    // )

    // componentDidUpdate(prevProps, prevState, snapshot)
    // {
    //     if (this.props.match.params.hero !== prevProps.match.params.hero) {
    //         this.props.changeHero(this.props.match.params.hero);
    //     }
    // }


    let key = props.match.params.hero;
    if (!friends.includes(key)) {
        key = defaultHero;
    }
    return (
        <main className="clearfix mt-1">
            <Hero hero={key}/>
            <DreamTeam hero={key}/>
            <FarGalaxy/>
        </main>
    );

}

export default Home;