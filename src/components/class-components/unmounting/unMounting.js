import { Component } from "react";
import ChildComponent from "./child";

class Unmounting extends Component {
  state = {
    isChildVisible: true,
  };
  onClick = () => {
    this.setState({
      isChildVisible: !this.state.isChildVisible,
    });
  };

  render() {
    return (
      <>
        <h2>Unmounting example</h2>
        <button onClick={this.onClick}>Click to hide child</button>
        {this.state.isChildVisible ? <ChildComponent /> : null}
      </>
    );
  }
}

export default Unmounting;
