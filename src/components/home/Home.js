import React from 'react';
import RecipeFetcher from '../recipe-fetcher/RecipeFetcher';
import dbRoutes from '../../utils/db-routes'

const Home = () => {
    return (
        <>
            <RecipeFetcher url={dbRoutes.allRecipes}/>
        </>
    )
}

export default Home