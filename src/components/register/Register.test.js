import React from 'react';
import renderer from 'react-test-renderer'
import Register from './Register';
import TestingRouter from '../../test-utils/TestingRouter';

describe('Register component', () => {
    it('Should render Register component', () => {
        const tree = renderer.create(
            <TestingRouter>
                <Register />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})