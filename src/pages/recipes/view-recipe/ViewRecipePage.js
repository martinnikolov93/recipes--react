import React from 'react';
import PageLayout from '../../../components/page-layout/PageLayout';
import ViewRecipe from '../../../components/view-recipe/ViewRecipe';
import withFetching from '../../../hocs/withFetching';

class ViewRecipePage extends React.Component {
    render() {
        const ViewRecipeWithFetch = withFetching('/recipe/' + this.props.match.params.id)(ViewRecipe)

        return (
            <PageLayout>
                <ViewRecipeWithFetch />
            </PageLayout >
        )
    }

}

export default ViewRecipePage