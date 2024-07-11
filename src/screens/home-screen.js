import React, { useContext, useState } from "react";
import Navbar from "../components/navBar/navbar";
import ButtonComponent from "../components/button/button";
import { Link } from "react-router-dom";
import axios from "axios";
import UseEffectExample from "../components/useEffect/useEffectEx1";
import UseEffectExample2 from "../components/useEffect/useEffectEx2";
import UseEffectEx3 from "../components/useEffect/useEffectEx3";
import { ProfileWrapper } from "../navigation/stack";
import UseReducer from "../components/useReducer/useReducer";
import UseReducerEx2 from "../components/useReducer/useReducerEx2";
import addProfileHoc from "../hoc/profile-hoc";
import EmployeeScreen from "../components/employeProfile/employee-screen";

function HomeScreen(props) {
  const sharedData = useContext(ProfileWrapper);
  console.log(props, "from Homescreen");
  console.log(sharedData, "sharedData");
  return (
    <div>
      <Navbar darkTheme={true} />
      <EmployeeScreen />
      {/* <UseReducerEx2 count={10} />
      <h2>
        welcome to home screen {sharedData.profileInfo.name}{" "}
        {sharedData.profileInfo.salary}
      </h2>

      <h2>Good morning {props.data.name}</h2>

      <h4>{sharedData.counter}</h4> */}

      {/* <UseEffectEx3 /> */}
      {/* <UseEffectExample2 />
      <UseEffectExample /> */}
    </div>
  );
}

export default addProfileHoc(HomeScreen);
