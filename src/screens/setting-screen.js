import React, { useContext } from "react";
import Navbar from "../components/navBar/navbar";
import { ProfileWrapper } from "../navigation/stack";
import ButtonComponent from "../components/button/button";
import addProfileHoc from "../hoc/profile-hoc";

function SettingScreen(props) {
  const sharedData = useContext(ProfileWrapper);

  console.log(props, "from setting screen");

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
      <h3>Welcome {props.data.name}</h3>
    </div>
  );
}

export default addProfileHoc(SettingScreen);
