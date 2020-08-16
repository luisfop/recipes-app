import React,{useEffect,useState} from 'react';
import {getRecipes} from './Services/index';

import './App.css';

const App = () => {

  const[recipes,setRecipes] = useState([{}]);
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



  },[])
  

  return (
    <div className="App">
      <h1>Recipe App</h1>

    </div>
  );
}

export default App;
