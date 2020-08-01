const baseUrl = 'http://localhost:9999/api'

module.exports = {
    allRecipes: `${baseUrl}/recipe`,
    userRecipes: (id) => {return `${baseUrl}/user/recipes?id=${id}`},
    recipeByID: (id) => {return `${baseUrl}/recipe/${id}`},
}