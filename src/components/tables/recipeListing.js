import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeTable from "./recipeTable";
import CustomSpinner from "../customSpinner/customSpinner";
import { ImageComponent } from "../image/imageComponent";

function RecipeList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(); // Initial data fetch without query
  }, []);

  useEffect(() => {
    if (query) {
      fetchData(query); // Fetch data with search query
    }
  }, [query]);

  const fetchData = async (query = "") => {
    setLoading(true);
    const url = query
      ? `https://dummyjson.com/recipes/search?q=${query}`
      : "https://dummyjson.com/recipes";
    const response = await axios.get(url);
    if (response.status === 200) {
      const recipeList = response.data.recipes;
      setData(recipeList);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a recipe"
        value={query}
        onChange={handleInputChange}
      />
      {loading ? <CustomSpinner /> : <RecipeTable data={data} />}
    </div>
  );
}

export default RecipeList;
