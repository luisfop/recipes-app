import React from 'react';

import './Recipe.css';

const Recipe = ({clicked,label,image}) => {
    
    return(
        <div className="Recipe">
            <div className="Card" onClick={clicked} >
                <label>{label}</label> 
            </div>
                <img src={image} onClick={clicked} />
        </div>
    )
    
}

export default Recipe;