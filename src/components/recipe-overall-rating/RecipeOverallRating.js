import React, { useState, useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const RecipeOverallRating = (props) => {
    const [overallRating, setOverallRating] = useState(0)

    useEffect(() => {
        const reviews = props.reviews
        let overallRating = 0

        if (reviews.length !== 0) {
            let sum = 0
            for (let i = 0; i < reviews.length; i++) {
                sum += reviews[i].rating;
            }
            overallRating = sum / reviews.length
        } else {
            overallRating = 0
        }
        
        setOverallRating(overallRating)

    }, [props.reviews])

    return (
        <div>
            {['', '', '', '', ''].map((emptyTrash, i) => {
                return <span key={i}>{i < overallRating ? <FaStar /> : <FaRegStar />}</span>
            })}
        </div>
    )
}

export default RecipeOverallRating