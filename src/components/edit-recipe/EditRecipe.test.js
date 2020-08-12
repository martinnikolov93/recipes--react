import React from 'react';
import renderer from 'react-test-renderer'
import EditRecipe from './EditRecipe';
import TestingRouter from '../../test-utils/TestingRouter';

describe('Edit recipe component', () => {
    it('Should render Edit recipe component', () => {
        const tree = renderer.create(
            <TestingRouter>
                <EditRecipe />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})