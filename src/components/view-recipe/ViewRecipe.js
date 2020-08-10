import React, { useContext } from 'react';
import styles from './ViewRecipe.module.css'
import FavouriteIcon from '../favourite-icon/FavouriteIcon';
import EditRecipeButton from '../edit-recipe-button/EditRecipeButton';
import UserContext from '../../Context';
import AddReview from '../add-review/AddReview';

const ViewRecipe = (props) => {
    const context = useContext(UserContext)

    if (!props.data) {
        return 'Loading..'
    }

    return (
        <>
            <article>
                <img className={styles.image} src={props.data.url} alt={props.data.title} />
                <div>
                    <FavouriteIcon recipeId={props.data._id} />
                    {props.data.author._id === context.user._id
                        ?
                        <EditRecipeButton recipeId={props.data._id} />
                        :
                        null
                    }
                </div>
                <hr className={styles['recipe-hr']} />
                <h3>{props.data.title}</h3>
                <div className={styles.description}>{props.data.description + "..."}</div>
                <br /><br />
                <h2>Rate</h2>
                <hr className={styles['recipe-hr']} />
                <div>
                    <AddReview recipeId={props.data._id} reviews={props.data.reviews} />
                </div>
            </article>
        </>
    )
}

export default ViewRecipe