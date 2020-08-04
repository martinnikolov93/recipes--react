import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import styles from './EditRecipeButton.module.css'

const EditRecipeButton = (props) => {
    return(
        <Link to={`/recipe/edit/${props.recipeId}`}><FaRegEdit className={styles['edit-button']} /></Link>
    )
}

export default EditRecipeButton