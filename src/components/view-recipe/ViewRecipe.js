import React, { useContext } from 'react';

import styles from './ViewRecipe.module.css'
import FavouriteIcon from '../favourite-icon/FavouriteIcon';
import { isEmptyObject } from '../../utils/helpers';
import EditRecipeButton from '../edit-recipe-button/EditRecipeButton';
import UserContext from '../../Context';


const ViewRecipe = (props) => {
    const context = useContext(UserContext)

    if (isEmptyObject(props.recipe)) {
        return 'Loading..'
    }
    console.log(context)
    return (
        <>
            <article>
                <img className={styles.image} src={props.recipe.url} alt={props.recipe.title} />
                <FavouriteIcon recipeId={props.recipe._id} />
                {props.recipe.author._id === context.user._id
                    ?
                    <EditRecipeButton recipeId={props.recipe._id} />
                    :
                    null
                }
                <h3>{props.recipe.title}</h3>
                <div>{props.recipe.description + "..."}</div>
            </article>
        </>
    )
}

export default ViewRecipe