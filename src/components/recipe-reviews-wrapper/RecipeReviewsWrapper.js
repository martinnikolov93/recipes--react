import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import styles from './RecipeReviewsWrapper.module.css'

const RecipeReviewsWrapper = (props) => {
    if (props.reviews.length === 0) {
        return 'No reviews'
    }

    return (
        <IconContext.Provider value={{ color: "rgb(255 205 0)", size: '1em' }}>
            <div className={styles.wrapper}>
                {props.reviews.reverse().map((review, i) => {
                    return (
                        <div key={i} className={styles.box}>
                            <div>{review.author.email}</div>
                            <hr />
                            {['', '', '', '', ''].map((emptyTrash, i) => {
                                return <span key={i}>{i < review.rating ? <FaStar /> : <FaRegStar />}</span>
                            })}
                            <div>{review.comment}</div>
                        </div>
                    )
                })}
            </div>
        </IconContext.Provider >
    )
}

export default RecipeReviewsWrapper