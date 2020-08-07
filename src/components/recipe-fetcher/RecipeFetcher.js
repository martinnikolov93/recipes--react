import React from 'react';
import RecipesWrapper from '../recipes-wrapper/RecipesWrapper';

class RecipeFetcher extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: null
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((json) => this.setState({ recipes: json }))
    }

    componentDidUpdate() {
        console.log(this.state.recipes)
    }

    render() {
        if (this.state.recipes == null) {
            return 'Loading..'
        }

        if (this.state.recipes.length === 0) {
            return 'No recipes'
        }

        return (
            <RecipesWrapper recipes={this.state.recipes} />
        )
    }
}

export default RecipeFetcher