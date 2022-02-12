import { ADD_INGREDIENT, DISABLED, REMOVE_INGREDIENT, RESET_INGREDIENT } from "./actionType"

export const price = {
    Salad : 10,
    Meat : 20,
    Cheese : 30
}
const INITIAL_STATE ={
    ingredients : [
    {type: 'Salad', amount: 0,},
    {type: 'Meat', amount: 0,},
    {type: 'Cheese', amount: 0,},
  ],
  disabled : false,
  totalPrice : 100
}


export const reducer=(state=INITIAL_STATE,action) => {
    switch (action.type) {
        case ADD_INGREDIENT :
            state.ingredients.forEach(item => {
                if(item.type === action.payload){
                  item.amount += 1;
                }
                
              })
        return {
            ...state,
            totalPrice : parseInt(state.totalPrice) + parseInt(price[action.payload])
        }
        case REMOVE_INGREDIENT :
            state.ingredients.forEach(item => {
                if(item.type === action.payload){
                  if(item.amount >0){
                    item.amount--;
                }
              }}) ;
        return {
                ...state,
                totalPrice : parseInt(state.totalPrice) - parseInt(price[action.payload])
            }
        case DISABLED :
            
            let sum=0;
            state.ingredients.forEach(item=>{
                if(item.amount !==0){
                    sum++
                }})
        return {
            ...state,
            disabled : sum>0,
        }
        case RESET_INGREDIENT :
            return{
                ...state,
                ingredients : [
                    {type: 'Salad', amount: 0,},
                    {type: 'Meat', amount: 0,},
                    {type: 'Cheese', amount: 0,},
                  ],
                  disabled : false,
                  totalPrice : 100
            }
   
        default:
            return state
    }
}