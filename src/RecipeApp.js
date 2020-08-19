import React, { useEffect, useState } from "react";

import { getRecipes } from "./Services";
import {APP_ID, APP_KEY } from './Enviroment';

import Recipes from "./Components/Recipes/Recipes";

import "./RecipeApp.css";


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [inputData, setInputData] = useState("");
  const [query, setQuery] = useState("Pasta");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    async function fetchData() {
      let response = await getRecipes(url, query);
      setRecipes(response.slice(0,9));
        setLoading(false);
    }
    fetchData();
  }, [query]);
  
  const inputHandler = event => {
    setInputData(event.target.value);
  };

  const submitSearch = event => {
    event.preventDefault();
    setQuery(inputData);
  };

  const disableButton = () => {
    return inputData.length < 1;
  }

  const allRecipes = loading ? 'Waiting for loading...' :  <Recipes recipes={recipes} loading={loading}/> 

  return (    
      <div className="Recipes_App">
        <h1>Recipe App</h1>
        <div className="Form">
          <form onSubmit={submitSearch}>
            <input type="text" onChange={inputHandler} placeholder="Type the recipe that you're looking for..."/>
            <button disabled={disableButton()}>Search</button>
          </form>
        </div>
          {allRecipes}
      </div>
    
  );
};

export default App;
