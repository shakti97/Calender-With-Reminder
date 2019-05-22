import React, { Component } from 'react';
import Calender from '../Components/Calender/Calender';
import './Main.css';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <Calender/>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;