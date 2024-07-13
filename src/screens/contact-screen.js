import React, { useContext } from "react";
import Navbar from "../components/navBar/navbar";
import { Link, Outlet } from "react-router-dom";
import { ProfileWrapper } from "../navigation/stack";

function ContactScreen() {
  const profileInfo = useContext(ProfileWrapper);

  console.log(profileInfo);

  const changeName = () => {
    profileInfo.newName("gowtham");
  };
  return (
    <div>
      <Navbar />
      <h2>welcome to contact screen {profileInfo.profileInfo.name} </h2>
      <button onClick={changeName}>Change name</button>
      <Link to={"doctors"}>Doctors</Link>
      <Link to={"engineers"}>Engineers</Link>
      <Outlet />
    </div>
  );
}

export default ContactScreen;
