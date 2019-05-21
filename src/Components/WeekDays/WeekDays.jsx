import React, { Component } from "react";
import moment from "moment";

class WeekDays extends Component {
  weekdayshort = moment.weekdaysShort();
  state = {
    dateObject: moment()
  };
  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");

    console.log(
      "moment ",
      moment(),
      "firstDay",
      firstDay,
      "moment function",
      moment(moment())
    );
    return firstDay;
  };
  render() {
    return (
      <React.Fragment>
        {this.weekdayshort.map(day => {
          return (
            <th key={day} className="week-day">
              {day}
            </th>
          );
        })}
      </React.Fragment>
    );
  }
}

export default WeekDays;
