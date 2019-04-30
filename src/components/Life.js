import React, { Component } from "react";

class Life extends Component {
  // 1 - get default props

  // 2 - set default state

  state = {
    title: "Life Cycles"
  };

  // 3 - before render
  componentWillMount() {
    console.log(" 3. before render");
  }

  componentWillUpdate() {
    console.log("Before update");
  }

  componentDidUpdate() {
    console.log("After update");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.title === "something different") {
      return false;
    }
    return true;
  }

  componentWillReceiveProps() {
    console.log("Before receiving props");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  // 4 - render jsx
  render() {
    console.log("RENDER");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div>
          <button onClick={() => this.setState({ title: "something different" })}>
            Click to change
          </button>
        </div>
      </div>
    );
  }

  // 5 - after render
  componentDidMount() {
    console.log("5. after render");
  }
}
export default Life;
