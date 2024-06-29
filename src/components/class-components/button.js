import React, { Component } from "react";
import { Card } from "../card/card";

class ButtonComponentClass extends Component {
  state = {
    text1: "subscribe",
    text2: "subscribed",
    isSubscribe: true,
  };

  subscribeHandler = () => {
    console.log("button clicked");
    this.setState(
      {
        isSubscribe: !this.state.isSubscribe,
      },
      () => {}
    );

    console.log(this.state.isSubscribe, "outside the setState");
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.subscribeHandler}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>

        {this.state.isSubscribe ? (
          <>
            <h2>Thanks for subscribing, enjoy the premium content</h2>
            <Card />
          </>
        ) : (
          <h2>Please subscribe to access the premium content</h2>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonComponentClass;

// inheritence: acquiring properties and methods from parent class
