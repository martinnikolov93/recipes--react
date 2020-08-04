const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Recipe.find().populate('author')
            .then((recipes) => res.send(recipes.reverse()))
            .catch(next);
    },

    getOne: (req, res, next) => {
        const id = req.params.id
        models.Recipe.findById(id).populate('author')
            .then((recipe) => res.send(recipe))
            .catch(next);
    },

    post: (req, res, next) => {
        const { title, url, categoryId, description } = req.body;
        const { _id } = req.user;

        models.Recipe.create({ title, url, category: categoryId, description, author: _id })
            .then((createdRecipe) => {
                console.log(createdRecipe)
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { recipes: createdRecipe } }),
                    models.Recipe.findOne({ _id: createdRecipe._id }),
                    models.Category.updateOne({ _id: categoryId }, { $push: { recipes: createdRecipe } })
                ]);
            })
            .then(([modifiedObj, recipeObj, modifiedCatObj]) => {
                res.send(recipeObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, url, categoryId, description } = req.body;
        models.Recipe.updateOne({ _id: id }, { title, url, category: categoryId, description })
            .then((updatedRecipe) => res.send(updatedRecipe))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Recipe.deleteOne({ _id: id })
            .then((removedRecipe) => res.send(removedRecipe))
            .catch(next)
    }
};