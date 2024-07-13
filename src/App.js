import React from "react";
import "./index.css";

import useInternetStatus from "./components/custom-hooks/use-internet-checker.js";
import DataFetch from "./components/data-fetch-component.js";
import UserList from "./components/user-list.js";

const App = () => {
  const isConnected = useInternetStatus();
  const list = [
    {
      name: "shirt",
      text: "designed shirt",
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      name: "samsung",
      text: "mobile",
      url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
  ];

  if (!isConnected) {
    return <h3>Internet not avialable</h3>;
  }
  return (
    <>
      {/* <Stack /> */}
      {/* <EvenChecker /> */}
      {/* <CounterExample /> */}
      <UserList />
      <DataFetch />
    </>
  );
};

export default App;
