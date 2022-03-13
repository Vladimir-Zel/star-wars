import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {defaultHero} from "./utils/Constants";

function App () {
    const [hero, setHero] = useState(defaultHero);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hero: defaultHero
    //     }
    // }

    const changeHero = hero => {
        setHero(hero)
        // this.setState({hero});
    }

    // render() {
        return (
            <div className='container-fluid'>
                <Header hero={hero}/>
                <Main changeHero={changeHero}/>
                <Footer/>
            </div>
        );
    // }
}

export default App;