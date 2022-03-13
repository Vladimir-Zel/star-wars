import React, {useEffect, useState} from 'react';
import styles from './aboutMe.module.css';

import {characters, friends, periodMonth} from "../utils/Constants";

const AboutMe = props => {
    const [hero, setHero] = useState();

    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }


    useEffect(() => {

        let key = props.match.params.hero;
        if (!friends.includes(key)) {
            key = friends[0];
        }
        let hero = JSON.parse(localStorage.getItem(key));
        if (!hero || (Date.now() - hero.time) > periodMonth) {
            fetch(characters[key].url)
                .then(response => response.json())
                .then(data => {
                    let info = {
                        "name": data.name,
                        "height": data.height,
                        "mass": data.mass,
                        "hair_color": data.hair_color,
                        "skin_color": data.skin_color,
                        "eye_color": data.eye_color,
                        "birth_year": data.birth_year,
                        "gender": data.gender
                    };

                    setHero(info);
                    // this.setState({hero: info});
                    hero = {
                        info,
                        time: Date.now()
                    };
                    localStorage.setItem(key, JSON.stringify(hero))
                });
        } else {

            setHero(hero.info)
            // this.setState({hero: hero.info});
        }
        props.changeHero(key);
    }, [])

    // render() {
    return (
        <div>
            {(hero) &&
            <div className={`farGalaxy ${styles.hero_box}`}>
                <p><span className={styles.hero_titles}>name:</span> {hero.name}</p>
                <p><span className={styles.hero_titles}>height:</span> {hero.height}</p>
                <p><span className={styles.hero_titles}>birth year:</span> {hero.birth_year}</p>
                <p><span className={styles.hero_titles}>gender:</span> {hero.gender}</p>
                <p><span className={styles.hero_titles}>mass:</span> {hero.mass}</p>
                <p><span className={styles.hero_titles}>hair color:</span> {hero.hair_color}</p>
                <p><span className={styles.hero_titles}>skin color:</span> {hero.skin_color}</p>
                <p><span className={styles.hero_titles}>eye color:</span> {hero.eye_color}</p>
            </div>
            }
        </div>
    )

    // }
}

export default AboutMe;