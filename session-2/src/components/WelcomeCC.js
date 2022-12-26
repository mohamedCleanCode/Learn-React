import React from "react";

class WelcomeCC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: "Mohamed",
      lName: "Mostafa",
      counter: 0,
    };
  }
  changeName = () => {
    this.setState({
      fName: "Ashrakat",
    });
  };
  increese = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <>
        <h1>
          WelcomeCC {this.state.fName} {this.state.lName}
        </h1>
        <p>{this.state.counter}</p>
        <button onClick={this.changeName}>Click</button>
        <button onClick={this.increese}>+</button>
      </>
    );
  }
}
export default WelcomeCC;
