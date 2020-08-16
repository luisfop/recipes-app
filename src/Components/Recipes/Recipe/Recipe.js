import React from 'react';

const Recipe = (props) => {
    
    return(
        <div className="Recipe">
            <label>Name: {props.label}</label> 
            <img src={props.image} />
        </div>
    )


    
}

export default Recipe;