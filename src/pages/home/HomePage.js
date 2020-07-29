import React from 'react';
import PageLayout from '../../components/page-layout/PageLayout';
import Home from '../../components/home/Home';

const HomePage = () => {
    return (
        <PageLayout>
            <h2>Home</h2>
            <Home />
        </PageLayout>
    )
}

export default HomePage