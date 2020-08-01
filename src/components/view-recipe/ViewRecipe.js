import React from 'react';

import styles from './ViewRecipe.module.css'

const ViewRecipe = (props) => {
    return(
        <>
        <article>
            <img className={styles.image} src={props.recipe.url} alt={props.recipe.title} />
            <h3>{props.recipe.title}</h3>
            <div>{props.recipe.description + "..."}</div>
        </article>
        </>
    )
}

export default ViewRecipe