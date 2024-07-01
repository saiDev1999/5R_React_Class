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
import Stack from "./navigation/stack.js";

const App = () => {
  return (
    <div>
      <Stack />
    </div>
  );
};

export default App;
