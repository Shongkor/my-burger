import React from 'react';

export const OrderModal = (props) => {
    const Ingredients = props.orderHistory.map(item =>{
            const perItemCost = item.amount * item.price;
            return <li className="fs-5"><strong>{item.type} : </strong> {item.amount} ({perItemCost} tk)</li>
        })
  return (
    <div>
        {Ingredients}
    </div>
  );
};
