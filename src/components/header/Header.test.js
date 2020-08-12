import React from 'react';
import renderer from 'react-test-renderer'
import Header from './Header';
import TestingRouter from '../../test-utils/TestingRouter';

const userAuthDummy = {
    loggedIn: true
}

const userUnauthDummy = {
    loggedIn: false
}

describe('Header component', () => {
    it('Should render authenticated header component', () => {
        const tree = renderer.create(
            <TestingRouter user={userAuthDummy}>
                <Header />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('Should render unauthenticated header component', () => {
        const tree = renderer.create(
            <TestingRouter user={userUnauthDummy}>
                <Header />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})