
const postRecipe = require("../controllers/postRecipe")
const getRecipeById = require("../controllers/getRecipeById")
const getRecipeByName = require("../controllers/getRecipeByName")
const getAllRecipes = require("../controllers/getAllRecipes")















const getRecipeByIdHandler = async (req, res)=>{ 
    const { id } = req.params;
    const source = isNaN(id) ? "DB" : "API" 
    try {
       const recipeById = await getRecipeById(id, source)
       res.status(200).json(recipeById)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
};







const getRecipeByNameHandler = async(req, res)=>{
    const { name } = req.query;
    const results = name ?
    await getRecipeByName(name):
    await getAllRecipes()
    res.status(200).json(results);
};









const postRecipeHandler = async (req, res) =>{
    const { name, image, summary, healthScore, steps } = req.body;
    try {
        const newRecipes = await postRecipe(name, image, summary, healthScore, steps)
        res.status(201).json(newRecipes)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
    
}






module.exports = {
    getRecipeByIdHandler,
    getRecipeByNameHandler,
    postRecipeHandler
};