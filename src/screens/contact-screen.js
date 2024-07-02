import React from "react";
import Navbar from "../components/navBar/navbar";
import { Link, Outlet } from "react-router-dom";

function ContactScreen() {
  return (
    <div>
      <Navbar />
      <h2>welcome to contact screen</h2>
      <Link to={"doctors"}>Doctors</Link>
      <Link to={"engineers"}>Engineers</Link>
      <Outlet />
    </div>
  );
}

export default ContactScreen;
