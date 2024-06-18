import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponent from "./components/button/button.js";
import FirstComponent from "./components/boostrap/first-component.js";
import CustomAccordion from "./components/accordion/accordion.js";
import CustomProgressBar from "./components/progress-bar/progress-bar.js";
// import ButtonComponent from "./components/button/button.js";

const App = () => {
  const isLogin = true;
  // if (isLogin) {
  //   return (
  //     <>
  //       <h3>Wellcome user good afternoon</h3>
  //       <ImageComponent />
  //       <Card />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h3>Please login to access the app</h3>
  //     </>
  //   );
  // }
  return (
    <div>
      <ImageComponent
        src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        width="100"
        height="100"
        alt="shirt"
      />
      <ImageComponent
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        width="100"
        height="100"
        alt="shirt"
      />
    </div>
  );
};

export default App;
