import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../Context';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styles from './FavouriteIcon.module.css'
import { useHistory } from 'react-router-dom'
import { config } from './utils/constants'

const FavouriteIcon = (props) => {

    const [isFav, setFav] = useState(false)
    const context = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        if (context.user.favourites.includes(props.recipeId)) {
            setFav(true)
        }
    }, [isFav, props.recipeId, context.loggedIn, context.user.favourites])

    const removeFromFav = () => {
        fetch(config.url.API_URL + '/user/favourites/' + context.user._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recipeId: props.recipeId })
        })
            .then((response) => response.json())
            .then((updatedUser) => {
                const index = context.user.favourites.indexOf(props.recipeId);
                context.user.favourites.splice(index, 1);
                setFav(false)
            })
            .catch((err) => console.log(err))
    }

    const addToFav = () => {

        if (context.loggedIn === false) {
            return history.push('/login')
        }

        fetch(config.url.API_URL + '/user/favourites/' + context.user._id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recipeId: props.recipeId })
        })
            .then((response) => response.json())
            .then((updatedUser) => {
                context.user.favourites.push(props.recipeId)
                setFav(true)
            })
            .catch((err) => console.log(err))

    }

    return (
        <>

            {
                isFav
                    ?
                    <FaHeart className={styles['favourite-icon']} onClick={removeFromFav} />
                    :
                    <FaRegHeart className={styles['favourite-icon']} onClick={addToFav} />
            }

        </>
    )
}

export default FavouriteIcon