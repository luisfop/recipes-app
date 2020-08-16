import React from 'react';

import Recipe from './Recipe/Recipe';

import './Recipes.css'


const Recipes = (props) => {

    const showRecipes = props.loading ? 'Loading...' : props.recipes.map((recipe,i) => {
        return( <Recipe key={i} label={recipe.recipe.label} image={recipe.recipe.image} />)
    });

    

    return(
        <div className="Recipes">
            {showRecipes} 
        </div>
            
    )
}

export default Recipes;