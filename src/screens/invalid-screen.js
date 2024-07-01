import React from "react";
import Navbar from "../components/navBar/navbar";
import { useNavigate } from "react-router-dom";

function InvalidScreen() {
  const navigate = useNavigate();
  const handleRedirection = () => {
    const isRedirect = true;
    if (isRedirect) {
      navigate("/");
    } else {
    }
  };
  return (
    <div>
      <h2>You have lost 404 custom error</h2>
      <button
        onClick={handleRedirection}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to home
      </button>
    </div>
  );
}

export default InvalidScreen;
