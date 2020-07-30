import React from 'react';
import PageLayout from '../../../components/page-layout/PageLayout';
import AddRecipe from '../../../components/add-recipe/AddRecipe';

const AddRecipePage = () => {
    return(
        <PageLayout>
            <h2>Add Recipe</h2>
            <AddRecipe />
        </PageLayout>
    )
}

export default AddRecipePage