import React from 'react';
import renderer from 'react-test-renderer'
import CategoriesWrapper from './CategoriesWrapper';
import TestingRouter from '../../test-utils/TestingRouter';

jest.mock('../../components/category/Category.js', () => 'Category')

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
                <CategoriesWrapper data={categoriesDummy} />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})