import React from 'react';

import Recipe from './Recipe/Recipe';

import './Recipes.css'


const Recipes = (props) => {

    console.log('RECIPES -> -> ' ,props.recipes)
    

    const showRecipes = props.loading ? 'Loading...' : props.recipes.map((recipe,i) => {
        return( <Recipe key={i} label={recipe.recipe.label} image={recipe.recipe.image} ingredientes={recipe.recipe.ingredients} />)
    });

    

    return(
        <div className="Recipes">
            {showRecipes.slice(0,9)} 
        </div>
            
    )
}

export default Recipes;