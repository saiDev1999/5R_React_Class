import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponent from "./components/button/button.js";
import FirstComponent from "./components/boostrap/first-component.js";
import CustomAccordion from "./components/accordion/accordion.js";
import CustomProgressBar from "./components/progress-bar/progress-bar.js";
import { fakeData } from "./javascript/data.js";
import Heading1, { Heading3, Heading6 } from "./components/heading/headings.js";
import CustomList from "./components/list/customList.js";
import { recipeData } from "./javascript/recipeData.js";
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
      {/* <ButtonComponent
        text="Login"
        bgColor="red"
        height={100}
        width={100}
        onPress={() => {}}
      />

      <ButtonComponent
        text="Signup"
        bgColor="green"
        height={100}
        width={50}
        onPress={() => {}}
      /> */}

      {recipeData.map((eachRecipe, index) => {
        const {
          name: dishName,
          image,
          ingredients,
          instructions,
          id,
        } = eachRecipe;
        return (
          <React.Fragment key={id}>
            <Heading1 title={`${id} ${dishName}`} />
            <ImageComponent
              src={image}
              width={100}
              height={100}
              alt={dishName}
            />

            <Heading1 title={"Ingredients to prepare"} />
            <CustomList list={ingredients} />

            <Heading1 title={"Instructions to prepare"} />
            <CustomList list={instructions} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default App;
