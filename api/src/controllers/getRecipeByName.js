const { API_KEY } = process.env;
const { Recipe } = require("../db");
const axios = require("axios");
const { cleanRecipes } = require("./cleanersData");
const { Op } = require("sequelize");

const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`


const getRecipeByName = async (name)=>{
    





    const dataBaseRecipe = await Recipe.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});
    const apiRecipesRaw = (await axios.get(`${URL}`)).data.results
    const apiRecipes = cleanRecipes(apiRecipesRaw);
    const filteredApi = (await apiRecipes).filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()))
    return [...filteredApi, ...dataBaseRecipe]

}


module.exports = getRecipeByName; 