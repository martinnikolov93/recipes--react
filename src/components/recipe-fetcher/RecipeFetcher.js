import React from 'react';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';

class RecipeFetcher extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((json) => this.setState({ recipes: json }))
    }

    render() {
        if (this.state.recipes.length === 0) {
            return 'Loading..'
        }

        return (
            <RecipesWrapper recipes={this.state.recipes} />
        )
    }
}

export default RecipeFetcher