import { GET_RECIPES, SEARCH_RECIPES, ORDER_RECIPES_NAME, FILTER_RECIPES_DIETS, FILTER_RECIPES_ORIGIN, ORDER_RECIPES_HEALTSCORE } from "./actionsTypes";
import axios from "axios"




///-----------------
export const getRecipes = ()=>{
    return async function(dispatch){
       const recipeData = await axios.get("http://localhost:3001/recipes/")
       const recipes = recipeData.data

      dispatch({type: GET_RECIPES, payload: recipes})
    }
}
///-------------------
export const searchRecipes = (name)=>{
  return async function(dispatch){
    if (name.trim() === "") {
      alert("Por favor, ingresa un nombre de receta válido");
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:3001/recipes/?name=${name}`);
      if(data.length === 0) throw Error("no hay recetas con ese nombre")
      dispatch({ type: SEARCH_RECIPES, payload: data });
    } catch (error) {
      alert(error);
    }
  };
  }
  ///------------

  export const filterRecipesDiets =(diets)=>{
    return {type: FILTER_RECIPES_DIETS, payload: diets}
  }
  ///----------------
   ///------------

   export const filterRecipesOrigin =(created)=>{
    return {type: FILTER_RECIPES_ORIGIN, payload: created}
  }
  ///----------------
  export const orderRecipesName = (order)=>{
    return {type: ORDER_RECIPES_NAME, payload: order}/// PUEDE SER A: ASCENDENTE O D: DESCENDENTE
  }

  ///-------------

  export const orderRecipesHealtScore = (healthScore)=>{
    return {type: ORDER_RECIPES_HEALTSCORE, payload: healthScore}
  }





