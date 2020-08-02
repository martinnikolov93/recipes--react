import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';

const Category = () => {
    const { title } = useParams()

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9999/api/category/${title}`)
            .then((response) => response.json())
            .then((category) => {
                setRecipes(category.recipes)
            })
    }, [title])

    return (
        <>
            <RecipesWrapper recipes={recipes} />
        </>
    )
}

export default Category