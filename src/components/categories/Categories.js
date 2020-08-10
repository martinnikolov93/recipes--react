import React from 'react';
import CategoriesWrapper from '../categories-wrapper/CategoriesWrapper';
import withFetching from '../../hocs/withFetching';

const CategoriesWrapperWithFetch = withFetching('/category/')(CategoriesWrapper)

const Categories = () => {
    return (
        <>
            <CategoriesWrapperWithFetch />
        </>
    )
}

export default Categories