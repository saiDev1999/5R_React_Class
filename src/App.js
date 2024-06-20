import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponentClass from "./components/class-components/button.js";
import TodoComponent from "./components/class-components/todo/todo.js";

const App = () => {
  const isLogin = true;

  return (
    <div>
      {/* <ButtonComponentClass /> */}
      <TodoComponent />
    </div>
  );
};

export default App;
