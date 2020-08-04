import React from 'react';
import RecipeFetcher from '../recipe-fetcher/RecipeFetcher';
import dbRoutes from '../../utils/db-routes'

const Home = () => {
    return (
        <>
            <h2>Latest recipes</h2>
            <RecipeFetcher url={dbRoutes.getAllRecipes}/>
        </>
    )
}

export default Home