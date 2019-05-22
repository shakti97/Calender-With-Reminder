import React, { Component } from "react";
import moment from "moment";
import WeekDays from "../WeekDays/WeekDays";
import Days from "../Days/Days";
import "./Calender.css";
import Modal from "../../Container/Modal/Modal";
import Reminder from "../Reminder/Reminder";
class Calender extends Component {
  state = {
    dateObject: moment(),
    allmonths: moment.months(),
    show: false,
    datObj: ""
  };
  month = () => {
    return this.state.dateObject.format("MMMM");
  };
  onPrev = () => {
    this.setState({
      dateObject: this.state.dateObject.subtract(1, "month")
    });
  };
  onNext = () => {
    this.setState({
      dateObject: this.state.dateObject.add(1, "month")
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  setReminder = (e, date) => {
    e.preventDefault();
    // console.log(date);
    // console.log(this.state.dateObject);
    this.setState(
      {
        show: true,
        datObj: {
          date: date,
          dMonth: this.state.dateObject.month()
        }
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div className="calender">
        <div className="calender-month">
          <div className="leftArrow">
            <i className="fa fa-arrow-circle-left left" onClick={this.onPrev} />
          </div>
          <div className="">{this.month()}</div>
          <div className="rightArrow">
            <i className="fa fa-arrow-circle-right" onClick={this.onNext} />
          </div>
        </div>
        <div className="calender-table">
          <table className="calendar-day">
            <thead>
              <tr>
                <WeekDays />
              </tr>
            </thead>
            <tbody>
              <Days
                dateObject={this.state.dateObject}
                setReminder={this.setReminder}
              />
            </tbody>
          </table>
        </div>
        {this.state.show && (
          <Modal
            show={this.state.show}
            handleClose={this.handleClose}
            modalTitle="Add Reminder"
          >
            <Reminder datObj={this.state.datObj} />
          </Modal>
        )}
      </div>
    );
  }
}

export default Calender;
