import React from 'react';

import './Recipe.css';

const Recipe = (props) => {
    
    return(
        <div className="Recipe">
            <div className="Card" onClick={props.clicked} >
                <label>{props.label}</label> 
            </div>
                <img src={props.image} onClick={props.clicked} />
        </div>
    )


    
}

export default Recipe;