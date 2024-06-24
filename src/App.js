import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponentClass from "./components/class-components/button.js";
import TodoComponent from "./components/class-components/todo/todo.js";
import ProductListing from "./components/class-components/productListing/productListing.js";
import Greeting from "./components/greeting/greeting.js";
import MountingPhase from "./components/class-components/mounting/mounting.js";

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

  return (
    <div>
      <MountingPhase favColor={"red"} />
    </div>
  );
};

export default App;
