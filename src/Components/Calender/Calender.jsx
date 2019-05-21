import React, { Component } from 'react';
import moment from 'moment';
import WeekDays from '../WeekDays/WeekDays';
import Days from '../Days/Days';
import './Calender.css';
class Calender extends Component {
    state = {
        dateObject: moment(),
        allmonths : moment.months()
    }
    month = () => {
        return this.state.dateObject.format("MMMM");
    };
    render() {
        return (
            <div className="calender">
                <div className='calender-month'>{this.month()}</div>
                <table className="calendar-day">
                    <thead>
                    <tr><WeekDays/></tr>
                    </thead>
                    <tbody><Days/></tbody>
                </table>
            </div>
        );
    }
}

export default Calender;