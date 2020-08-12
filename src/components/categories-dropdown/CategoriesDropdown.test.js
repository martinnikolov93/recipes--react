import React from 'react';
import renderer from 'react-test-renderer'
import CategoriesDropdown from './CategoriesDropdown';
import TestingRouter from '../../test-utils/TestingRouter';

const categoriesDummy = [
    { title: 'category1' },
    { title: 'category2' },
    { title: 'category3' },
    { title: 'category4' },
]

describe('Categories dropdown component', () => {
    it('Should render Categories dropdown component', () => {
        const tree = renderer.create(
            <TestingRouter>
                <CategoriesDropdown data={categoriesDummy} />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})