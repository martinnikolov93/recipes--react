import React, { useContext } from 'react';

import styles from './ViewRecipe.module.css'
import FavouriteIcon from '../favourite-icon/FavouriteIcon';
import { isEmptyObject } from '../../utils/helpers';
import EditRecipeButton from '../edit-recipe-button/EditRecipeButton';
import UserContext from '../../Context';
import AddReview from '../add-review/AddReview';
import RecipeReviewsWrapper from '../recipe-reviews-wrapper/RecipeReviewsWrapper';

const ViewRecipe = (props) => {
    const context = useContext(UserContext)

    if (isEmptyObject(props.recipe)) {
        return 'Loading..'
    }

    return (
        <>
            <article>
                <img className={styles.image} src={props.recipe.url} alt={props.recipe.title} />
                <div>
                    <FavouriteIcon recipeId={props.recipe._id} />
                    {props.recipe.author._id === context.user._id
                        ?
                        <EditRecipeButton recipeId={props.recipe._id} />
                        :
                        null
                    }
                </div>
                <hr className={styles['recipe-hr']} />
                <h3>{props.recipe.title}</h3>
                <div className={styles.description}>{props.recipe.description + "..."}</div>
                <br /><br />
                <h2>Rate</h2>
                <hr className={styles['recipe-hr']} />
                <div>
                    <AddReview recipeId={props.recipe._id} />
                </div>
                <br /><br />
                <h2>Reviews</h2>
                <hr className={styles['recipe-hr']} />
                <div>
                    <RecipeReviewsWrapper reviews={props.recipe.reviews} />
                </div>
            </article>
        </>
    )
}

export default ViewRecipe