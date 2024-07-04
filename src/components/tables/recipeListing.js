import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeTable from "./recipeTable";
import CustomSpinner from "../customSpinner/customSpinner";
import { ImageComponent } from "../image/imageComponent";

function RecipeList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    if (response.status === 200) {
      const recipeList = response.data.recipes;
      setData(recipeList);

      console.log(recipeList);
    }
  };
  return (
    <div>
      {data.length > 0 ? <RecipeTable data={data} /> : <CustomSpinner />}
    </div>
  );
}

export default RecipeList;
