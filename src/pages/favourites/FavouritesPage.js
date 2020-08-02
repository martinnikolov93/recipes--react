import React, { useEffect } from 'react';
import PageLayout from '../../components/page-layout/PageLayout';
import Favourites from '../../components/favourites/Favourites';

const FavouritesPage = () => {
    useEffect(() => {
        document.title = 'Favourites | Recipes'
    }, [])

    return (
        <PageLayout>
            <h2>Your Favourites</h2>
            <Favourites />
        </PageLayout>
    )
}

export default FavouritesPage