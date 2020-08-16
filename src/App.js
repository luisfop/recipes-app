import React,{useEffect,useState} from 'react';
import {getRecipes} from './Services/index';

import Recipes from './Components/Recipes/Recipes';

import './App.css';

const App = () => {

  const[recipes,setRecipes] = useState([]);
  const[loading,setLoading] = useState(true);

  const [inputData, setInputData] = useState('');

  const[query,setQuery] = useState('Chicken');


  const APP_ID = 'c8a76221';
  const APP_KEY = 'feb5bab9e2537bc55ecc437299af844c';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    async function fetchData(){
      let response = await getRecipes(url,query);
      setRecipes(response.hits);
      setLoading(false)      
    }
    fetchData();
  },[query])
  

  const inputHandler = (event) => {
    setInputData(event.target.value);
    console.log('input data ->', inputData);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setQuery(inputData);
  }



  return (
    <div className="App">
      <h1>Recipe App</h1>

      <form onSubmit={submitSearch}>
        <input type="text" onChange={inputHandler}/>
        <button>Search</button>
      </form>

    <hr/>

      <Recipes recipes={recipes} loading={loading}/>

    </div>
  );
}

export default App;
