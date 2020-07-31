import React from 'react';

const ViewRecipe = (props) => {
    return(
        <>
        <article>
            <img src={props.recipe.url} alt={props.recipe.title} />
            <h3>{props.recipe.title}</h3>
            <div>{props.recipe.description + "..."}</div>
        </article>
        </>
    )
}

export default ViewRecipe