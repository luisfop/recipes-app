import React from 'react';


const FullRecipe = (props) => {

    const ingredients = props.ingredients.map(ingrediente => {
        return(
            <ul>
                <li>{ingrediente.text}</li>
            </ul>
            )
    })
    
    return(
        <div>
            <h1>{props.title}</h1>
            
            { ingredients}
        </div>    
    )
}

export default FullRecipe;