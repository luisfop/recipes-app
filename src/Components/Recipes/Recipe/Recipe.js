import React from 'react';

import './Recipe.css';

const Recipe = (props) => {





    const ingredients = props.ingredientes.map(ingrediente => {
        return(<p>{ingrediente.text}</p>)
    })
    
    return(
        <div className="Recipe">
            <div className="Card">
                <label>Name: {props.label}</label> 
            </div>
                <img src={props.image} />
                {/* {ingredients} */}
        </div>
    )


    
}

export default Recipe;