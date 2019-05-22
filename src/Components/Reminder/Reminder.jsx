import React, { Component } from "react";
import { connect } from "react-redux";
import "./Reminder.css";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      time: "",
      clientSideValidation: []
    };
  }
  handleChange = event => {
    event.preventDefault();
    var targetName = event.target.name;
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        if (targetName === "time")
          this.setState({
            clientSideValidation: []
          });
      }
    );
  };
  sumbitReminder = event => {
    event.preventDefault();
    let clientSideValidation = [];
    this.props.reminders.forEach(reminder => {
      if (reminder.time === this.state.time) {
        clientSideValidation.push("Time");
      }
    });
    if (clientSideValidation.length !== 0) {
      this.setState({
        clientSideValidation: clientSideValidation
      });
      return;
    }
    let reminderObj = {
      date: this.props.datObj.date,
      month: this.props.datObj.dMonth,
      description: this.state.description,
      time: this.state.time
    };
    this.props.addReminder(reminderObj);
  };
  render() {
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
                  max="30"
                  required
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
                  required
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Set Time"
                />
                {this.state.clientSideValidation.includes("Time") ? (
                  <div className="redColor">Two Reminder Have Same Time</div>
                ) : (
                  ""
                )}
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
  };
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
