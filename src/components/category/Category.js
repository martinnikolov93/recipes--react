import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';

const Category = (props) => {
    const { title } = useParams()

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9999/api/category/recipes/${props.categoryTitle ? props.categoryTitle : title}`)
            .then((response) => response.json())
            .then((recipes) => {
                setRecipes(recipes)
            })
    }, [title, props.categoryTitle])

    return (
        <>
            <RecipesWrapper recipes={recipes} limit={props.limit ? props.limit : false} />
        </>
    )
}

export default Category