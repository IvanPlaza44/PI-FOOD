const { API_KEY } = process.env;
const { Recipe } = require("../db")
const axios = require("axios")
const { cleanRecipes } = require("../controllers/cleanersData")

const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
   
const getAllRecipes = async()=>{
    const dataBaseRecipes = await Recipe.findAll()
    const apiRecipesRaw = (await axios.get(`${URL}`)).data.results
    const apiRecipes = cleanRecipes(apiRecipesRaw);
    return [...dataBaseRecipes, ...apiRecipes]

}
module.exports =  getAllRecipes;
