import React from 'react';
import { Burger } from '../Burger/Burger';

export const Ingredients = (props) => {
  let ingredients = props.ingredients.map(item => {
    let amountArray = [...Array(item.amount).keys()]
    return amountArray.map(_ => {
      return <Burger type={item.type} key={Math.random()} />
    })
  }).reduce((array,element) => {
     return array.concat(element);
  },[]);
  if(ingredients.length === 0){
    ingredients = <h4 className="">Please Add Some Ingredients</h4>
  }
  return (
<div>
<div className="text-center">
        <Burger type="burger-top"/>
        {ingredients}
        <Burger type="burger-bottom"/>
    </div>
</div>
  );
};
