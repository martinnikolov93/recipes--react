import React from 'react';
import Category from '../category/Category';
import { Link } from 'react-router-dom';

const CategoriesWrapper = (props) => {
    if (!props.data) {
        return 'Loading..'
    }

    return (
        <>
            {props.data.map((category, i) => {
                return (
                    <div key={i}>
                        <h2><Link to={`categories/${category.title}`} >{category.title}</Link></h2>
                        <Category categoryTitle={category.title} limit={4} />
                    </div>
                )
            })}
        </>
    )
}

export default CategoriesWrapper