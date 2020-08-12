import React from 'react';
import styles from './RecipeBox.module.css'
import { Link } from 'react-router-dom';
import FavouriteIcon from '../favourite-icon/FavouriteIcon';
import RecipeOverallRating from '../recipe-overall-rating/RecipeOverallRating';

const RecipeBox = (props) => {
    let recipeDescription = props.recipe.description
    recipeDescription = recipeDescription.slice(0, 100)
    
    return (
        <article className={styles['recipe-card']}>
            <div className={styles['favourite-icon']}>
                <FavouriteIcon recipeId={props.recipe._id} />
            </div>
            <Link className={styles['recipe-link']} to={'/recipe/view/' + props.recipe._id}>
                <img className={styles.image} src={props.recipe.url} alt={props.recipe.title} />
                <RecipeOverallRating reviews={props.recipe.reviews}/>
                <h3 className={styles.title}>{props.recipe.title}</h3>
                <div className={styles.description}>{recipeDescription + "..."}</div>
            </Link >
        </article>
    )
}

export default RecipeBox