import React from 'react';
import Category from '../../components/category/Category';
import PageLayout from '../../components/page-layout/PageLayout';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { title } = useParams()

    return (
        <>
            <PageLayout>
                <h2>{title}</h2>
                <Category />
            </PageLayout>
        </>
    )
}

export default CategoryPage