import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponentClass from "./components/class-components/button.js";
import TodoComponent from "./components/class-components/todo/todo.js";
import ProductListing from "./components/class-components/productListing/productListing.js";

const App = () => {
  const isLogin = true;

  return (
    <div>
      {/* <ButtonComponentClass /> */}
      {/* <TodoComponent /> */}
      <ProductListing />
    </div>
  );
};

export default App;
