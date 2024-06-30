import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponentClass from "./components/class-components/button.js";

import ProductListing from "./components/class-components/productListing/productListing.js";

import MountingPhase from "./components/class-components/mounting/mounting.js";
import Unmounting from "./components/class-components/unmounting/unMounting.js";
import ParentComponent from "./components/class-components/purecomponents/parent.js";
import CircleComponent from "./components/class-components/circleTask/circles.js";
import UseStateExample from "./components/funtionalHooks/useState/useStateEx.js";
import TodoComponent from "./components/funtionalHooks/useState/todo.js";
import Form from "./components/forms/uncontrolled/form.js";
import ControlledForm from "./components/forms/controlled/controlled.js";
import { Greeting } from "./components/heading/headings.js";

const App = () => {
  const isLogin = true;

  const persons = [
    {
      name: "kiran",
      dayRouting: [["Woke up at 7am", "breakfast at 9am", "class at 10am"]],
      breakTime: 10,
    },
    {
      name: "ramya",
      dayRouting: [["Woke up at 8am", "breakfast at 10am", "class at 11am"]],
      breakTime: 60,
    },
  ];

  const names = ["kiran", "sathvik", "mounika", "sashi", "ramya"];
  const greeting = ["Woke up at 7am", "breakfast at 9am", "class at 10am"];
  console.log("greeting: ", greeting);

  return (
    <div>
      {/* <MountingPhase favColor={"red"} /> */}
      {/* <ParentComponent /> */}
      {/* <CircleComponent /> */}
      {/* <UseStateExample /> */}

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <Form /> */}
      <Greeting>
        <h4>Good morning 5R </h4>
        <h4> 5R doing good in react js </h4>
      </Greeting>

      <Greeting>
        <h4>Good morning 6R </h4>
        <h4> 6R needs to improve in react js </h4>
      </Greeting>
    </div>
  );
};

export default App;
