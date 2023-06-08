const { Recipe, Diet } = require("../db")

const postRecipe = async (name, image, summary, healthScore, steps, diets) => {
    const newRecipe = await Recipe.create({name, image, summary, healthScore, steps});
    //Relacionar las dietas con la receta
    if (diets && diets.length > 0) {
        await Promise.all(diets.map(async (diet) => {
          const dietObj = await Diet.findOne({ name: diet });
          if (dietObj) {
            await newRecipe.addDiets(dietObj);
          }
        }));
      }
    
    return newRecipe
}
module.exports = postRecipe;