import React from 'react';

import Recipe from './Recipe/Recipe';


const Recipes = (props) => {

    

    // console.log('Props.Recipes ->>>>> ',props.recipes)
        
    const showRecipes = props.loading ? 'Loading...' : props.recipes.map((recipe,i) => {
        return( <Recipe key={i} label={recipe.recipe.label} image={recipe.recipe.image} />)
    })

    return(
        <div className="">
            {showRecipes} 
        </div>
            
    )
}

export default Recipes;