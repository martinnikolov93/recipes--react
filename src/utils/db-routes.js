const baseUrl = 'http://localhost:9999/api'

module.exports = {
    getAllRecipes: `${baseUrl}/recipe`,
    postRecipe: `${baseUrl}/recipe`,
    getUserRecipes: (id) => {return `${baseUrl}/user/recipes?id=${id}`},
    getRecipeByID: (id) => {return `${baseUrl}/recipe/${id}`},
}