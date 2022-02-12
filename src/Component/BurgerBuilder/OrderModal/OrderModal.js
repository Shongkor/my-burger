import React from 'react';
import { price } from '../../../Redux/reducer';

export const OrderModal = (props) => {
    const Ingredients = props.orderHistory.map(item =>{
            const perItemCost = item.amount * price[item.type];
            return <li className="fs-5" key={Math.random()}><strong>{item.type} : </strong> {item.amount} ({perItemCost} tk)</li>
        })
  return (
    <div>
        {Ingredients}
    </div>
  );
};
