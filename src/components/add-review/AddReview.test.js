import React from 'react';
import renderer from 'react-test-renderer'
import AddReview from './AddReview';
import TestingRouter from '../../test-utils/TestingRouter';

jest.mock('../../components/recipe-reviews-wrapper/RecipeReviewsWrapper', () => 'RecipeReviewsWrapper')

const userAuthDummy = {
    loggedIn: true,
    user: {
        email: 'test@test.com'
    }
}

const userUnauthDummy = {
    loggedIn: false,
}

describe('Add review component', () => {
    it('Should render authenticated add review component', () => {
        const tree = renderer.create(
            <TestingRouter user={userAuthDummy}>
                <AddReview />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('Should render unauthenticated add review component', () => {
        const tree = renderer.create(
            <TestingRouter user={userUnauthDummy}>
                <AddReview />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})