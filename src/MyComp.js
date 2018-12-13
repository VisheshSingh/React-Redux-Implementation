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
    onAgeUp: () => dispatch({ type: "ADD" }),
    onAgeDown: () => dispatch({ type: "SUBTRACT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComp);
