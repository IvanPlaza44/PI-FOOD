const { Recipe } = require("../db")
const axios = require("axios")
const { API_KEY } = process.env;
const { cleanRecipeById } = require("./cleanersData")



const getRecipeById = async (id, source)=>{
    const URL = `https://api.spoonacular.com/recipes/`
    // const recipe = 
    //     source === "API" 
    //         ? (await axios.get(`${URL}${id}/information?apiKey=${API_KEY}`)).data
    //         : await Recipe.findByPk(id);
    let recipe = {}
    if( source === "API"){
        recipe = (await axios.get(`${URL}${id}/information?apiKey=${API_KEY}`)).data
        recipe = cleanRecipeById(recipe)
    }else{
        recipe = await Recipe.findByPk(id);
    }
    return recipe;
}
module.exports = getRecipeById;



