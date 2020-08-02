import React from 'react';

import styles from './ViewRecipe.module.css'
import FavouriteIcon from '../favourite-icon/FavouriteIcon';
import { isEmptyObject } from '../../utils/helpers';


const ViewRecipe = (props) => {
    if(isEmptyObject(props.recipe)){
        return 'Loading..'
    }

    return (
        <>
            <article>
                <img className={styles.image} src={props.recipe.url} alt={props.recipe.title} />
                <FavouriteIcon recipeId={props.recipe._id} />
                <h3>{props.recipe.title}</h3>
                <div>{props.recipe.description + "..."}</div>
            </article>
        </>
    )
}

export default ViewRecipe