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
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value
        })
      };
    case "SUBTRACT":
      // newState.age -= action.value;
      // break;

      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value
        })
      };

    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.key)
      };
  }
  return newState;
};

export default rootReducer;
