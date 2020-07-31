import React from 'react';
import RecipeBox from '../recipe-box/RecipeBox';

import styles from './RecipesWrapper.module.css'

const RecipesWrapper = (props) => {
    const limit = props.limit
    let recipes = props.recipes
    if (limit){
        recipes = recipes.slice(0, limit)
    }

    return (
        <div className={styles['recipes-wrapper']}>
            {recipes.map((recipe) => {
                return <RecipeBox key={recipe.title} id={recipe._id} url={recipe.url} title={recipe.title} description={recipe.description} />
            })}
        </div>
    )
}

export default RecipesWrapper