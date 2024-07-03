import React, { useState } from "react";
import Navbar from "../components/navBar/navbar";
import ButtonComponent from "../components/button/button";
import { Link } from "react-router-dom";
import axios from "axios";
import UseEffectExample from "../components/useEffect/useEffectEx1";
import UseEffectExample2 from "../components/useEffect/useEffectEx2";
import UseEffectEx3 from "../components/useEffect/useEffectEx3";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <h2>welcome to home screen</h2>
      <UseEffectEx3 />
      {/* <UseEffectExample2 />
      <UseEffectExample /> */}
    </div>
  );
}

export default HomeScreen;
