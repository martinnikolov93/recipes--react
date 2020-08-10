import React from 'react';
import { useParams } from 'react-router-dom';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';
import withFetching from '../../hocs/withFetching';

const Category = (props) => {
    const { title } = useParams()
    const RecipesWrapperWithFetch = withFetching(`/category/recipes/${props.categoryTitle ? props.categoryTitle : title}`)(RecipesWrapper)

    return (
        <>
            <RecipesWrapperWithFetch  limit={props.limit ? props.limit : false}/>
        </>
    )
}

export default Category