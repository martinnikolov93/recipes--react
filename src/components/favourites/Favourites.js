import React, { useContext } from 'react';
import UserContext from '../../Context';
import RecipeFetcher from '../recipe-fetcher/RecipeFetcher';
import dbRoutes from '../../utils/db-routes';

const Favourites = () => {
    const context = useContext(UserContext)

    return (
        <>
            <RecipeFetcher url={dbRoutes.getUserFavourites(context.user._id)} />
        </>
    )
}

export default Favourites