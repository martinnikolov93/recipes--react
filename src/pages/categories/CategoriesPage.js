import React, {useEffect} from 'react';
import PageLayout from '../../components/page-layout/PageLayout';
import Categories from '../../components/categories/Categories';

const CategoriesPage = () => {
    useEffect(() => {
        document.title = 'Categories | Recipes'
    }, [])

    return (
        <PageLayout>
            <Categories />
        </PageLayout>
    )
}

export default CategoriesPage