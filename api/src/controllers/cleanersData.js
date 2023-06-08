const cleanSteps = (arr)=>{
    if(arr.length === 0) return[]
    const { steps } = arr[0]
    let cleanArr = steps.map((step => `Paso -> ${step.number} ${step.step}`))
    return cleanArr;
}

const cleanRecipes = (arr)=>
    arr.map((recip) => {
        if(recip.vegetarian) recip.diets = [...recip.diets, "vegetarian"]
        return{
            id: recip.id,
            name: recip.title,
            image: recip.image,
            summary: recip.summary,
            healthScore: recip.healtScore,
            steps: cleanSteps(recip.analyzedInstructions),
            diets: recip.diets,
            created: false
            };
        });

const cleanRecipeById= (recip)=>{
    if(recip.vegetarian) recip.diets = [...recip.diets, "vegetarian"]
        return{
            id: recip.id,
            name: recip.title,
            image: recip.image,
            summary: recip.summary,
            healthScore: recip.healtScore,
            steps: cleanSteps(recip.analyzedInstructions),
            diets: recip.diets,
            created: false
            };

}

module.exports ={
    cleanRecipes, cleanSteps, cleanRecipeById
}