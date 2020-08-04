import React, { useState, useEffect } from 'react';
import Category from '../category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/api/category/')
            .then((response) => response.json())
            .then((categories) => {
                setCategories(categories)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            {categories.map((category, i) => {
                return (
                    <div key={i}>
                        <h2>{category.title}</h2>
                        <Category categoryTitle={category.title} limit={4} />
                    </div>
                )
            })}
        </>
    )
}

export default Categories