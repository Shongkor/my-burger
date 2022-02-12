import { ADD_INGREDIENT, DISABLED, REMOVE_INGREDIENT, RESET_INGREDIENT } from "./actionType"

export const addIngredient = ingredientType => {
    return {
        type : ADD_INGREDIENT,
        payload :ingredientType
    }
}
export const removeIngredient = ingredientType => {
    return { 
        type : REMOVE_INGREDIENT,
         payload :ingredientType
    }
}
export const disabled =() => {
    return {
        type : DISABLED,
    }
}
export const handleIngredientReset =() => {
    return {
        type : RESET_INGREDIENT,
    }
}