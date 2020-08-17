import React from 'react';

import './Recipe.css';

const Recipe = (props) => {
    
    return(
        <div className="Recipe">
            <div className="Card" onClick={props.clicked} >
                <label>Name: {props.label}</label> 
            </div>
                <img src={props.image} />
                <div className="Card__Info">
                </div>
        </div>
    )


    
}

export default Recipe;