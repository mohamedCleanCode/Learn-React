import React, { Component } from "react";

export default class CounterCC extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        {this.state.counter}
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          +
        </button>
      </div>
    );
  }
}
