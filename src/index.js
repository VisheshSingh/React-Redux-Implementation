import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MyComp from "./MyComp";
import { createStore } from "redux";
import rootReducer from "./store/rootReducer";

import "./styles.css";

class App extends Component {
  // State Updates May Be Asynchronous
  // So, you need to pass a function as
  // an argumet to setState
  /* To show Redux Implementation
  we will be commenting this stuff out
  onAgeUp = () => {
    this.setState(prevState => ({
      age: ++prevState.age
    }));
  };
  onAgeDown = () => {
    this.setState(prevState => ({
      age: --prevState.age
    }));
  };
  */
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>React Redux Example</h2>
        <MyComp />
      </div>
    );
  }
}

// Create a store
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
