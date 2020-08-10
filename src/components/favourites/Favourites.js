import React, { useContext } from 'react';
import UserContext from '../../Context';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';
import withFetching from '../../hocs/withFetching'

const Favourites = () => {
    const context = useContext(UserContext)
    const RecipesWrapperWithFetch = withFetching(`/user/favourites?id=${context.user._id}`)(RecipesWrapper)
    return (
        <>
            <RecipesWrapperWithFetch />
        </>
    )
}

export default Favourites