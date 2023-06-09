const { Recipe } = require("../db")

const postRecipe = async (name, image, summary, healthScore, steps, diets) => {
    const newRecipe = await Recipe.create({name, image, summary, healthScore, steps})
    diets.map( async (diet)=> await newRecipe.addDiets(diet))
    return (`La receta ${name} fue creada exitosamente 😁`)
}
module.exports = postRecipe;