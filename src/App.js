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
import CustomCorousel from "./components/corousel/corousel.js";
import UserForm from "./components/forms/userForm.js";
import CustomToasts from "./components/toasts/toasts.js";
import RecipeTable from "./components/tables/recipeTable.js";
import RecipeList from "./components/tables/recipeListing.js";
import DigitalClock from "./components/digitalClock/digitalClock.js";
import EvenChecker from "./components/useMemo/evenChecker.js";
import UseCallbackExample from "./components/useCallback/useCallback.js";
import CounterExample from "./components/counter-example.js";
import DataFetch from "./components/data-fetch-component.js";
import UserList from "./components/user-list.js";
import useInternetStatus from "./components/custom-hooks/use-internet-checker.js";

const App = () => {
  const isConnected = useInternetStatus();
  const list = [
    {
      name: "shirt",
      text: "designed shirt",
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      name: "samsung",
      text: "mobile",
      url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
  ];

  if (!isConnected) {
    return <h3>Internet not avialable</h3>;
  }
  return (
    <>
      {/* <Stack /> */}
      {/* <EvenChecker /> */}
      {/* <CounterExample /> */}
      <UserList />
      <DataFetch />
    </>
  );
};

export default App;
