import React from 'react';
import renderer from 'react-test-renderer'
import Login from './Login';
import TestingRouter from '../../test-utils/TestingRouter';

const userDummy = {
    loggedIn: false
}

describe('Login component', () => {
    it('Should render login component', () => {
        const tree = renderer.create(
            <TestingRouter user={userDummy}>
                <Login />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})