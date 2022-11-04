class Pantry {
    constructor(userObject) {
        this.pantry = userObject.pantry;
    }

    checkIngredients(recipe) {
        let missingIngredients = [];
        let pantryIds = this.pantry.map(ingredient => ingredient.ingredient);
        recipe.ingredients.forEach(ingredient => {
            let pantryIngredient = this.pantry.find(pantryIngredients => pantryIngredients.ingredient === ingredient.id);
            if (!pantryIds.includes(ingredient.id)) {
                missingIngredients.push(ingredient)
            } else if (pantryIds.includes(ingredient.id) && ingredient.quantity.amount > pantryIngredient.amount) {
                let amountDiff = ingredient.quantity.amount - pantryIngredient.amount;
                let neededIngredient = ingredient;
                neededIngredient.quantity.amount = amountDiff;
                missingIngredients.push(neededIngredient);
            }
        })
        
        return missingIngredients;
    }

    getIngredientNames(missingIngredients, allIngredients) {
        let result = missingIngredients.map(ingredient => {
            let foundIngredient = allIngredients.find(foundIngredient => foundIngredient.id === ingredient.id)
            ingredient['name'] = foundIngredient.name; 
            return ingredient;
        })

        return result;
    }
}
export default Pantry