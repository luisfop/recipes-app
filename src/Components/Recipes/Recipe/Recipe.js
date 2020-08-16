import React from 'react';

const Recipe = (props) => {
    
    
    
    return(
        <div className="">
            <label>Name: {props.label}</label> 
            <img src={props.image} />
        </div>
    )


    
}

export default Recipe;