import React from 'react';

import styles from './RecipeBox.module.css'
import { Link } from 'react-router-dom';
import FavouriteIcon from '../favourite-icon/FavouriteIcon';

const RecipeBox = (props) => {
    let recipeDescription = props.description
    recipeDescription = recipeDescription.slice(0, 100)

    return (
        <article className={styles['recipe-card']}>
            <div className={styles['favourite-icon']}>
                <FavouriteIcon recipeId={props.id} />
            </div>
            <Link className={styles['recipe-link']} to={'/recipe/view/' + props.id}>
                <img className={styles.image} src={props.url} alt={props.title} />

                <h3 className={styles.title}>{props.title}</h3>
                <div className={styles.description}>{recipeDescription + "..."}</div>
            </Link >
        </article>
    )
}

export default RecipeBox