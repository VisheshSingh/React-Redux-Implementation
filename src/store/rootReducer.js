const initState = {
  age: 21,
  history: []
};

const rootReducer = (state = initState, action) => {
  const newState = { ...state };

  //Updating state Immutable way
  switch (action.type) {
    case "ADD":
      // newState.age += action.value;
      // break;
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({ age: state.age + action.value })
      };
    case "SUBTRACT":
      // newState.age -= action.value;
      // break;

      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({ age: state.age - action.value })
      };
  }
  return newState;
};

export default rootReducer;
