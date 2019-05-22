const initState = {
  reminders: [
    { id: "01", description: "Meeting Today With Modi", time: "14:15" },
    { id: "01", description: "Meeting Today With Sachin", time: "16:15" }
  ]
};
const rootReducer = (state = initState, action) => {
//   console.log(action);
  //   console.log('month',state.reminders[action.datObj.month]);
  //   console.log("state",state.reminders[0]);
  if (action.type === "ADD_REMINDER") {
    let newReminder = [...state.reminders];
    let rem = {
      id: "" + action.datObj.month + action.datObj.date,
      description: action.datObj.description,
      time: action.datObj.time
    };
    newReminder.push(rem);
    // console.log(newReminder);
    return {
      ...state,
      reminders: newReminder
    };
    //   let rem={description : action.datObj.description, time : action.datObj.time}
    //   console.log('month',state.reminders[action.datObj.month]);
    //   let newReminder=state.reminders[action.datObj.month][action.datObj.date].push(rem);
    //   console.log("newReminder ",newReminder);
    //   console.log(state.reminders[0][0]);
    //   return {
    //       ...state,
    //       reminders : newReminder
    //   }
  }
  return state;
};

export default rootReducer;
