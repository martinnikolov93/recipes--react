import React from 'react';
import renderer from 'react-test-renderer'
import RecipeBox from './RecipeBox';
import TestingRouter from '../../test-utils/TestingRouter';

const recipeDummy = {
    _id: '1',
    title: 'Recipe Title',
    description: 'Recipe Description Recipe Description Recipe Description Recipe Description',
    url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4130102.jpg&w=596&h=399&c=sc&poi=face&q=85',
    reviews: [
        { rating: 3 },
        { rating: 4 }
    ],
}

const userAuthDummy = {
    loggedIn: true,
    user: {
        favourites: []
    }
}

describe('RecipeBox component', () => {
    it('Should render RecipeBox component', () => {
        const tree = renderer.create(
            <TestingRouter user={userAuthDummy}>
                <RecipeBox recipe={recipeDummy} />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})