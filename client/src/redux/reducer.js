



import { GET_RECIPES, SEARCH_RECIPES, ORDER_RECIPES_NAME, FILTER_RECIPES_DIETS, FILTER_RECIPES_ORIGIN, ORDER_RECIPES_HEALTSCORE } from "./actionsTypes";

const initialState ={
  originalRecipes: [], // Guarda todas las recetas sin filtrar
  recipes: [] // Guarda las recetas actuales
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        originalRecipes: action.payload,
        recipes: action.payload
      };
    
    case SEARCH_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    
    case ORDER_RECIPES_NAME:
      const orderedRecipes = action.payload === "A"
        ? [...state.recipes].sort((a, b) => a.name.localeCompare(b.name))
        : [...state.recipes].sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        recipes: orderedRecipes
      };
    
    case FILTER_RECIPES_DIETS:
      const filterRecipesDiets = state.originalRecipes.filter((recipe) => recipe.diets.includes(action.payload));
      return {
        ...state,
        recipes: filterRecipesDiets
      };
    
    case FILTER_RECIPES_ORIGIN:
      let filterRecipesOrigin = [];
      if (action.payload === "API") {
        filterRecipesOrigin = state.originalRecipes.filter((recipe) => recipe.created === false);
      } else {
        filterRecipesOrigin = state.originalRecipes.filter((recipe) => recipe.created === true);
      }
      return {
        ...state,
        recipes: filterRecipesOrigin
      };

      case ORDER_RECIPES_HEALTSCORE:
        const orderedRecipeHS = action.payload === "Menor"
        ? [...state.recipes].sort((a,b)=> a.healthScore - b.healthScore)
        : [...state.recipes].sort((a,b)=> b.healthScore - a.healthScore)
        return{
          ...state,
          recipes:orderedRecipeHS
        }

    default: 
      return state;
  }
};

export default reducer;
