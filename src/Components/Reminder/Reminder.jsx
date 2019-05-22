import React, { Component } from "react";
import { connect } from "react-redux";
import "./Reminder.css";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      time: ""
    };
  }
  handleChange = event => {
    event.preventDefault();
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  sumbitReminder = event => {
    event.preventDefault();
    let reminderObj = {
      date: this.props.datObj.date,
      month: this.props.datObj.dMonth,
      description: this.state.description,
      time: this.state.time
    };
    this.props.addReminder(reminderObj);
  };
  render() {
    // {
    //   console.log(this.props);
    // }
    return (
      <React.Fragment>
        <div className="reminder">
          <div className="showReminder">
            <div className="reminder-title">Reminders</div>
            {this.props.reminders &&
              this.props.reminders.map((reminder, index) => {
                return (
                  <div key={index + 1000} className="row reminder-div">
                    <div className="col-md-8 reminder-desc">
                      {reminder.description}
                    </div>
                    <div className="col-md-2 reminder-time">
                      {reminder.time}
                    </div>
                  </div>
                );
              })}
          </div>
          <br />
          <div>
            <div className="add-reminder">Add New Reminder</div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  onChange={this.handleChange}
                  placeholder="Set Description"
                />
              </div>
              <div className="form-group">
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Set Time"
                />
              </div>
              <div className="submit">
                <button
                  className="submit btn btn-primary"
                  onClick={this.sumbitReminder}
                >
                  Set Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let datObj = ownProps.datObj;
  let remind = [];
//   console.log(state.reminders);
  state.reminders.forEach(reminder => {
    if (reminder.id === "" + datObj.dMonth + datObj.date) {
      remind.push(reminder);
    }
  });
  return {
    reminders: remind
    }
};
const mapDispatchToProps = dispatch => {
  return {
    addReminder: remObj => {
      dispatch({ type: "ADD_REMINDER", datObj: remObj });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reminder);
