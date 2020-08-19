import React from 'react';

import './FullRecipe.css'


const FullRecipe = (props) => {

    const ingredients = props.ingredients.map(ingrediente => {
        return(
            <ul>
                <li>{ingrediente.text}</li>
            </ul>
            )
    })
    
    return(
        <div className="FullRecipe">
            <h1>{props.title}</h1>
            
            { ingredients}
        </div>    
    )
    
}

export default FullRecipe;