import React from 'react';
import renderer from 'react-test-renderer'
import Profile from './Profile';
import TestingRouter from '../../test-utils/TestingRouter';

jest.mock('../../hocs/withFetching.js', () => {
    return () => () => {
        return 'With Fetching Hoc'
    }
})

const userDummy = {
    loggedIn: true,
    user: {
        email: 'test@test.com'
    }
}

describe('Profile component', () => {
    it('Should render profile component', () => {
        const tree = renderer.create(
            <TestingRouter user={userDummy}>
                <Profile />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})