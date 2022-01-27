import React from 'react';
import { Control } from './Control/Control';
import { Ingredients } from './Ingredients/Ingredients';

export const BurgerBuilder = () => {
  let state = {
    ingredients: [
      {type: 'burger-salad', amount: 0},
      {type: 'burger-meat', amount: 0},
      {type: 'burger-cheese', amount: 0},
    ],
  }
  return (
  <div className="d-flex flex-md-row flex-column">
     <Ingredients ingredients={state.ingredients} />
     <Control />
  </div>
  );
};

