import "./styles.css";

import React from "react";
import ReactDom from "react-dom";

class MathApp1 extends React.Component {
  constructor() {
    super();
    this.state = { 
      val: 0
    };
  }
  add2 = () => {
    this.setState((pre) => {
      return { val: pre.val + 2 };
    });
  };
  square = () => {
    this.setState((pre) => {
      return { val: pre.val ** 2 };
    });
  };
  Double = () => {
    this.setState((pre) => {
      return { val: pre.val * 2 };
    });
  };
  DevideBy2 = () => {
    this.setState((pre) => {
      return { val: pre.val / 2 };
    });
  };
  Subtract2 = () => {
    this.setState((pre) => {
      return { val: pre.val - 2 };
    });
  };
  render() {
    return (
      <div>
        <h1 id="number">{this.state.val}</h1>
        <button onClick={this.add2}>Add 2!</button>
        <button onClick={this.square}>Square!</button>
        <button onClick={this.Double}>Double!</button>
        <button onClick={this.DevideBy2}>DevideBy 2!</button>
        <button onClick={this.Subtract2}>Subtract 2!</button>
      </div>
    );
  }
}

export default MathApp1;
