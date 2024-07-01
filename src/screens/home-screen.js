import React from "react";
import Navbar from "../components/navBar/navbar";
import ButtonComponent from "../components/button/button";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <h2>welcome to home screen</h2>

      {[1, 2, 3, 4].map((each) => {
        return (
          <Link to={`/hyderabad/${each}/info`}>
            <ButtonComponent text={each} />
          </Link>
        );
      })}
    </div>
  );
}

export default HomeScreen;
