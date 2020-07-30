import React, { useEffect } from 'react';
import PageLayout from '../../components/page-layout/PageLayout';
import Home from '../../components/home/Home';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Home | Recipes'
    }, [])

    return (
        <PageLayout>
            <Home />
        </PageLayout>
    )
}

export default HomePage