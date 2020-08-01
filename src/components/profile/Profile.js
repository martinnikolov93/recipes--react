import React, { useContext } from 'react';
import UserContext from '../../Context';
import RecipeFetcher from '../recipe-fetcher/RecipeFetcher';
import dbRoutes from '../../utils/db-routes';

const Profile = () => {
    const context = useContext(UserContext)

    return (
        <>
            <h3>Your recipes:</h3>
            <RecipeFetcher url={dbRoutes.getUserRecipes(context.user._id)}/>
        </>
    )
}

export default Profile