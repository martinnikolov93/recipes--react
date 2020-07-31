import React from 'react';
import PageLayout from '../../../components/page-layout/PageLayout';
import ViewRecipe from '../../../components/view-recipe/ViewRecipe';

class ViewRecipePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipe: {}
        } 
    }

    componentDidMount() {
        fetch(`http://localhost:9999/api/recipe/${this.props.match.params.id}`)
            .then((response) => response.json())
            .then((json) => {
                const recipe = json
                this.setState({recipe})
                console.log(recipe)
            })
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