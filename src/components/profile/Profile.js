import React, { useContext } from 'react';
import UserContext from '../../Context';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';
import withFetching from '../../hocs/withFetching'

const Profile = () => {
    const context = useContext(UserContext)
    const RecipesWrapperWithFetch = withFetching(`/user/recipes?id=${context.user._id}`)(RecipesWrapper)
    return (
        <>
            <h3>Email: {context.user.email}</h3>
            <h3>Your recipes:</h3>
            <RecipesWrapperWithFetch />
        </>
    )
}

export default Profile