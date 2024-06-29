import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  render() {
    console.log("child rendering....");
    return <div>ChildComponent</div>;
  }
}
