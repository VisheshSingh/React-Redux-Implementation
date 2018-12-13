import React, { Component } from "react";
import { connect } from "react-redux";

class MyComp extends Component {
  state = {
    age: 21
  };
  render() {
    return (
      <div>
        <p>Age: {this.props.age}</p>
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <h3>History</h3>
        <ul>
          {this.props.history.map(item => {
            return <li className="history">{item.age}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "ADD", value: 10 }),
    onAgeDown: () => dispatch({ type: "SUBTRACT", value: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComp);
