import React,{useState} from 'react';

import Recipe from './Recipe/Recipe';

import Modal from '../UI/Modal/Modal';


import './Recipes.css'
import FullRecipe from '../FullRecipe/FullRecipe';


const Recipes = ({recipes,loading}) => {

    const[showModal, setShowModal] = useState(false);
    const[index, setIndex] = useState(0);

    
    const recipeHandler = (id) => {
        setIndex(id);
        openModal();
    }

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    
    const recipe = recipes.map((recipe,i) => {
        return( 
                    <Recipe 
                        key={i} 
                        label={recipe.recipe.label} 
                        image={recipe.recipe.image} 
                        ingredientes={recipe.recipe.ingredients}
                        clicked={() => recipeHandler(i)} />
                )
    });

    const fullRecipe = loading ? 'Something went wrong' : <FullRecipe title={recipes[index].recipe.label} ingredients={recipes[index].recipe.ingredients} />
 
    return(
        <div className="Recipes">
            {recipe } 
            <Modal show={showModal}modalClosed={closeModal}>
                {fullRecipe}
            </Modal>
        </div>
            
    )
}

export default Recipes;