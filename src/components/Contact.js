import React from 'react';
import './contacts.module.css';
import {base_url, periodMonth} from "../utils/Constants";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: ['wait...']
        };
    }

    fillPlanets(url) {
        fetch(url)
            .then(response => response.json())
            .then(json => json.map(item => item.name))
            .then(planets => {
                this.setState({planets});
                let info = {
                    listPlanets: planets,
                    time: Date.now()
                };
                localStorage.setItem('planets', JSON.stringify(info));
            });
    }

    componentDidMount() {
        let planets = JSON.parse(localStorage.getItem('planets'));
        if (!planets || (Date.now() - planets.time) > periodMonth) {
            this.fillPlanets(`${base_url}/v1/planets`);
        } else {
            this.setState({planets: planets.listPlanets});
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet">{
                        this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Contact;