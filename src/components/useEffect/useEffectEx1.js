import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomSpinner from "../customSpinner/customSpinner";

function UseEffectExample() {
  const [data, setData] = useState([]);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    console.log("use Effecting executing...");
    // perform side effects
    fetchData();
  });

  const countHandler1 = () => {
    setCount1(count1 + 1);
  };

  const fetchData = async () => {
    try {
      const response1 = await axios.get("https://fakestoreapi.com/products");
      console.log(response1, "response1");

      if (response1.status === 200) {
        setData(response1.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Count 1 {count1}</h2>
      <button onClick={countHandler1}>Increase count 1</button>
      {data.length > 0 ? (
        <>
          {data.map((each, index) => (
            <div key={each.id} style={styles.card}>
              <img
                src={each.image}
                alt={each.title}
                style={styles.image}
                height={100}
              />
              <h3>{each.title}</h3>
              <p>{each.description}</p>
              <p>
                <strong>Category:</strong> {each.category}
              </p>
              <p>
                <strong>Price:</strong> ${each.price}
              </p>
              <p>
                <strong>Rating:</strong> {each.rating.rate} ({each.rating.count}{" "}
                reviews)
              </p>
            </div>
          ))}
        </>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "calc(33% - 64px)",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: "8px 8px 0 0",
  },
};

export default UseEffectExample;
