import React, { Component } from 'react';
import moment from 'moment';    
let rows=[];
class Days extends Component {
    state = {
        dateObject: moment()
    }
    componentWillMount(){
        this.dayMap();
    }
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
       return firstDay;
    };
    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };
    dayMap=()=>{
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
        daysInMonth.push(
            <td key={d} className="calendar-day">
            {d}
            </td>
        );
        }
        var totalSlots = [...blanks, ...daysInMonth];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
              cells.push(row); 
            } else {
              rows.push(cells); 
              cells = []; 
              cells.push(row);
            }
            if (i === totalSlots.length - 1) { 
              rows.push(cells);
            }
        }); 
    }
    render() {
        {console.log(rows)}
        return (
            rows.map((d, i) => {
                return i!==0 && <tr>{d}</tr>;
              })
        );
    }
}

export default Days;