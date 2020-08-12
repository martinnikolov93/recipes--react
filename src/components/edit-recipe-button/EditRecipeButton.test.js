import React from 'react';
import renderer from 'react-test-renderer'
import EditRecipeButton from './EditRecipeButton';
import TestingRouter from '../../test-utils/TestingRouter';

describe('Edit recipe button component', () => {
    it('Should render Edit recipe button component', () => {
        const tree = renderer.create(
            <TestingRouter>
                <EditRecipeButton />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})