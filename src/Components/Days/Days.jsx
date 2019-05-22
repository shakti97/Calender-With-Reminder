import React, { Component } from 'react';
import moment from 'moment';
import './Days.css';

let rows;
class Days extends Component {
    constructor(props){
        super(props);
        this.state = {
            dateObject: moment()
        }
    }
    componentWillMount(){
        this.dayMap();
    }
    componentWillUpdate(){
        this.dayMap();
    }
    firstDayOfMonth = () => {
        let dateObject = this.props.dateObject;
        let firstDay = moment(dateObject)
                     .startOf("month")
                     .format("d"); 
        // console.log(firstDay);
       return firstDay;
    };
    daysInMonth = () => {
        return this.props.dateObject.daysInMonth();
    };
    dayMap=()=>{
        let blanks = [];
        rows=[];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(<td key={i+100} className="calendar-day empty">{""}</td>);
        }
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
        daysInMonth.push(
            <td key={d} onClick={(e)=>this.props.setReminder(e,d)} className="calendar-day fill">
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
        // {console.log(this.props.dateObject)}
        return (
            rows.map((d, i) => {
                return i!==0 && <tr key={d+i} className='daysRow'>{d}</tr>;
              })
        );
    }
}


export default Days;