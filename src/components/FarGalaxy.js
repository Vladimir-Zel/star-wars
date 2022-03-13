import React, {Component, useEffect, useState} from 'react';
import style from "./fargalaxy.module.css";
import {base_url} from "../utils/Constants";

const FarGalaxy = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [opening_crawl,setOpening_crawl] = useState('');

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true
    //     };
    // }

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setIsLoading(false);
            setOpening_crawl(opening_crawl);

            // this.setState({
            //     isLoading: false,
            //     opening_crawl: opening_crawl
            // });
        } else {
            let episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setIsLoading(false);
                    setOpening_crawl(data.opening_crawl);

                    this.setState({
                        isLoading: false,
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }, []);

    // render() {
        const text = isLoading ? 'Loading...' : opening_crawl;
        return (
            <p className={style.farGalaxy}>{text}</p>
        );
    // }
}

export default FarGalaxy;