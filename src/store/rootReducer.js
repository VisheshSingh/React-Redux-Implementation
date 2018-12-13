const initState = {
  age: 21
};

const rootReducer = (state = initState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age++;
  }
  if (action.type === "SUBTRACT") {
    newState.age--;
  }
  return newState;
};

export default rootReducer;
