const initState = {
  age: 21
};

const rootReducer = (state = initState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.val;
  }
  if (action.type === "SUBTRACT") {
    newState.age -= action.val;
  }
  return newState;
};

export default rootReducer;
