import React, { useState } from "react";
import Navbar from "../components/navBar/navbar";
import ButtonComponent from "../components/button/button";
import { Link } from "react-router-dom";
import axios from "axios";

function HomeScreen() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>welcome to home screen</h2>

      {/* {[1, 2, 3, 4].map((each) => {
        return (
          <Link to={`/hyderabad/${each}/info`}>
            <ButtonComponent text={each} />
          </Link>
        );
      })} */}
      <button onClick={fetchData}>Fetch data</button>

      {data.length > 0 ? (
        <>
          {data?.map((each) => {
            return (
              <Link to={`/${each.category}/${each.id}/info`}>
                <ButtonComponent text={each.title} />
              </Link>
            );
          })}
        </>
      ) : (
        <h5>No products found</h5>
      )}
    </div>
  );
}

export default HomeScreen;
