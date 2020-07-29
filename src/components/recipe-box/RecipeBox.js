import React from 'react';

import styles from './RecipeBox.module.css'

const RecipeBox = (props) => {
    let recipeDescription = props.description
    recipeDescription = recipeDescription.slice(0, 100)

    return (
        <article className={styles['recipe-card']}>
            <img className={styles.image} src={props.url} alt={props.title} />
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.description}>{recipeDescription + "..."}</div>
        </article>
    )
}

export default RecipeBox