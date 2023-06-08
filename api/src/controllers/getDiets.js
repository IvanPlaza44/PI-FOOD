const { Diets } = require("../db")
const { cleanRecipeById } = require("./cleanersData");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`



const getDiets = async() =>{
    const { data } = await axios.get(`${URL}`)
    let diets = [];
    let recipes = data?.results.map((recip) =>{
        if(recip.vegetarian&&!diets.includes("vegetarian")) diets = [...diets, "vegetarian"];
        recip.diets.map(diet=>{
            if(!diets.includes(diet)){
                diets = [...diets, diet]
            }
        })
        return cleanRecipeById(recip)
    })
    diets = diets.map(diet => {
        return {name: diet}})


    await Diets.bulkCreate(diets);
    
    return {recipes, diets}

}
module.exports = getDiets;