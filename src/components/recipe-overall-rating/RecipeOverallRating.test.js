import React from 'react';
import renderer from 'react-test-renderer'
import RecipeOverallRating from './RecipeOverallRating';
import TestingRouter from '../../test-utils/TestingRouter';

const reviewsDummy = [
    { rating: 1 },
    { rating: 5 },
    { rating: 2 },
    { rating: 4 }
]

describe('RecipeOverallRating component', () => {
    it('Should render RecipeOverallRating component', () => {
        const tree = renderer.create(
            <TestingRouter>
                <RecipeOverallRating reviews={reviewsDummy} />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})