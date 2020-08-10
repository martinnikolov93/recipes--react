import React from 'react';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';
import withFetching from '../../hocs/withFetching'

const RecipesWrapperWithFetch = withFetching('/recipe')(RecipesWrapper)

const Home = () => {
    return (
        <>
            <h2>Latest recipes</h2>
            <RecipesWrapperWithFetch />
        </>
    )
}

export default Home