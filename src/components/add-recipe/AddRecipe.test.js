import React from 'react';
import renderer from 'react-test-renderer'
import AddRecipe from './AddRecipe';
import TestingRouter from '../../test-utils/TestingRouter';

const userDummy = {
    loggedIn: true,
    user: {
        email: 'test@test.com'
    }
}

describe('User component', () => {
    it('Should render user component', () => {
        const tree = renderer.create(
            <TestingRouter user={userDummy}>
                <AddRecipe />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})