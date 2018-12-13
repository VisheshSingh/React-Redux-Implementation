import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    age: 21
  };

  // State Updates May Be Asynchronous
  // So, you need to pass a function as
  // an argumet to setState
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

  onAgeDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>React Redux Example</h2>
        <p>Age: {this.state.age}</p>
        <button onClick={this.onAgeUp}>Age up</button>
        <button onClick={this.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
