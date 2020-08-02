const baseUrl = 'http://localhost:9999/api'

module.exports = {
    getAllRecipes: `${baseUrl}/recipe`,
    postRecipe: `${baseUrl}/recipe`,
    putRecipe: (id) => {return `${baseUrl}/recipe/${id}`},
    getUserRecipes: (id) => {return `${baseUrl}/user/recipes?id=${id}`},
    getUserFavourites: (id) => {return `${baseUrl}/user/favourites?id=${id}`},
    getRecipeByID: (id) => {return `${baseUrl}/recipe/${id}`},
}