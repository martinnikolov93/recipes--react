import React from 'react';
import PageLayout from '../../../components/page-layout/PageLayout';
import ViewRecipe from '../../../components/view-recipe/ViewRecipe';
import dbRoutes from '../../../utils/db-routes';

class ViewRecipePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipe: {}
        }
    }

    componentDidMount() {
        document.title = ''

        fetch(dbRoutes.getRecipeByID(this.props.match.params.id))
            .then((response) => response.json())
            .then((recipe) => {
                this.setState({ recipe })
                document.title = recipe.title + ' | Recipes'
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <PageLayout>
                <ViewRecipe recipe={this.state.recipe} />
            </PageLayout >
        )
    }

}

export default ViewRecipePage