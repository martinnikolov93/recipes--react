import React from 'react';
import renderer from 'react-test-renderer'
import ViewRecipe from './ViewRecipe';
import TestingRouter from '../../test-utils/TestingRouter';

jest.mock('../favourite-icon/FavouriteIcon', () => 'FavouriteIcon')
jest.mock('../edit-recipe-button/EditRecipeButton', () => 'EditRecipeButton')
jest.mock('../add-review/AddReview', () => 'AddReview')

const dataDummy = {
    title: 'Test title',
    url: 'http://google.com',
    description: 'Test description',
    author: {
        _id: '123'
    }
}

const userDummyCreator = {
    user: {
        _id: '123'
    }
}

const userDummyNotCreator = {
    user: {
        _id: '234'
    }
}

describe('ViewRecipe component', () => {
    it('Should render ViewRecipe component when is recipe creator', () => {
        const tree = renderer.create(
            <TestingRouter user={userDummyCreator}>
                <ViewRecipe data={dataDummy} />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('Should render ViewRecipe component when is NOT recipe creator', () => {
        const tree = renderer.create(
            <TestingRouter user={userDummyNotCreator}>
                <ViewRecipe data={dataDummy} />
            </TestingRouter>
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})