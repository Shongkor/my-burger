import React from 'react';
import './Burger.css'

export const Burger = (props) => {
        let ingredients = null;
         switch(props.type) { 
             case 'burger-top':
                ingredients = <div><img src="assets/images/top.png" alt="burger-top" /></div>
                break;
             case 'burger-bottom':
                ingredients = <div><img src="assets/images/bottom.png" alt="burger-bottom" /></div>
                break;
             case 'burger-meat':
                ingredients = <div><img src="assets/images/meat.png" alt="burger-meat" /></div>
                break;
             case 'burger-salad':
                ingredients = <div><img src="assets/images/salad.png" alt="burger-salad" /></div>
                break;
             case 'burger-cheese':
                ingredients = <div><img src="assets/images/cheese.png" alt="burger-cheese" /></div>
                break;
            default: 
                ingredients = null;
            }
  return (
    <div className="mt-2 me-5">
        <div className="text-center">
        {ingredients}
        </div>
    </div>
  );
};
