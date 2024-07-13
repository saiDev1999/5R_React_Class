import { useState } from "react";
import useAxios from "./custom-hooks/use-axios";

const DataFetch = () => {
  const [data, error, loading] = useAxios();
  const [categories, categoryError, categoryLoading] = useAxios(
    "https://fakestoreapi.com/products/categories"
  );

  console.log(data, error, loading, "data-fetch-component");

  if (loading && categoryLoading) {
    return <h4>Loading.... Please wait...</h4>;
  }

  if (error && categoryError) {
    return <h4>Something went wrong please try again later</h4>;
  }
  return (
    <>
      <h3>Data fetch component</h3>
      {data.map((each) => {
        return <h4>{each.title}</h4>;
      })}
      <h2>Category list </h2>
      {categories.map((each) => {
        return <h4>{each}</h4>;
      })}
    </>
  );
};

export default DataFetch;
