import React, { useContext } from "react";
import Navbar from "../components/navBar/navbar";
import { ProfileWrapper } from "../navigation/stack";
import ButtonComponent from "../components/button/button";

function SettingScreen() {
  const sharedData = useContext(ProfileWrapper);

  const changeCount = () => {
    sharedData.changeCounter();
  };

  const decrementHandler = () => {
    sharedData.decrementHandler();
  };
  return (
    <div>
      <Navbar />
      <h2>welcome to setting screen current count {sharedData.counter}</h2>
      <ButtonComponent text={"Increment"} onPress={changeCount} />
      <ButtonComponent text={"Decrement"} onPress={decrementHandler} />
    </div>
  );
}

export default SettingScreen;
