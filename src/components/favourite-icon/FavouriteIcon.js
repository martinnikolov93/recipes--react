import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../Context';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import styles from './FavouriteIcon.module.css'
import { useHistory } from 'react-router-dom';

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
        fetch('http://localhost:9999/api/user/favourites/' + context.user._id, {
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

        fetch('http://localhost:9999/api/user/favourites/' + context.user._id, {
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
            <IconContext.Provider value={{ color: "#ff3939", size: '2em' }}>
                {
                    isFav
                        ?
                        <div><FaHeart className={styles['favourite-icon']} onClick={removeFromFav} /></div>
                        :
                        <div><FaRegHeart className={styles['favourite-icon']} onClick={addToFav} /></div>
                }
            </IconContext.Provider>
        </>
    )
}

export default FavouriteIcon