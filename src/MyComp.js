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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "ADD", val: 10 }),
    onAgeDown: () => dispatch({ type: "SUBTRACT", val: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComp);
