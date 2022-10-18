import ingredientsData from '../data/ingredients';
class Recipe{
    constructor(recipeData) {
        this.id = recipeData.id
        this.image = recipeData.image
        this.ingredients = recipeData.ingredients
        this.instructions = recipeData.instructions
        this.name = recipeData.name
        this.tags = recipeData.tags
    }
}

export default Recipe;