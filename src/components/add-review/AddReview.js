import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'
import { getCookie, isEmptyObject } from '../../utils/helpers';
import styles from './AddReview.module.css'

const AddReview = (props) => {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [ratingErrors, setRatingErrors] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()

        let ratingErrors = validateRating(rating)
        setRatingErrors(ratingErrors)

        if (ratingErrors) {
            return
        }

        fetch('http://localhost:9999/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating,
                comment,
                recipeId: props.recipeId,
                token: getCookie('auth-token')
            })
        })
            .then((response) => response.json())
            .then((review) => {
                console.log(review)
            })
            .catch((err) => console.log(err))
    }

    const changeHandlerRating = (event) => {
        let rating = event.currentTarget.dataset.rating
        setRating(rating)

        let ratingErrors = validateRating(rating)
        setRatingErrors(ratingErrors)
    }

    const changeHandlerComment = (event) => {
        setComment(event.target.value)
    }

    const validateRating = (rating) => {
        let ratingErrors = {}

        if (rating <= 0 || rating > 5) {
            ratingErrors['bad-rating'] = 'You forgot to rate it!'
        }

        if (isEmptyObject(ratingErrors)) {
            return false
        }

        return ratingErrors
    }

    return (
        <>
            <div>Rate:</div>
            <span data-rating="1" onClick={changeHandlerRating}>{rating > 0 ? <FaStar /> : <FaRegStar />}</span>
            <span data-rating="2" onClick={changeHandlerRating}>{rating > 1 ? <FaStar /> : <FaRegStar />}</span>
            <span data-rating="3" onClick={changeHandlerRating}>{rating > 2 ? <FaStar /> : <FaRegStar />}</span>
            <span data-rating="4" onClick={changeHandlerRating}>{rating > 3 ? <FaStar /> : <FaRegStar />}</span>
            <span data-rating="5" onClick={changeHandlerRating}>{rating > 4 ? <FaStar /> : <FaRegStar />}</span>
            <div className="input-error-text">{ratingErrors ? Object.values(ratingErrors)[0] : null}</div>

            <form onSubmit={submitHandler}>
                <div>
                    <div>Comment: (Optional)</div>
                    <textarea className={styles['add-review-textarea']} onChange={changeHandlerComment}></textarea>
                </div>
                <div>
                    <button>Add review</button>
                </div>
            </form>
        </>
    )
}

export default AddReview