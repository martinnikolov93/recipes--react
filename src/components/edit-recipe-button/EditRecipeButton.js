import React from 'react';
import { Link } from 'react-router-dom';

const EditRecipeButton = (props) => {
    return(
        <Link to={`/recipe/edit/${props.recipeId}`}>Edit Recipe</Link>
    )
}

export default EditRecipeButton