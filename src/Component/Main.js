import React from 'react';
import { Route } from 'react-router-dom';
import { BurgerBuilder } from './BurgerBuilder/BurgerBuilder';
import { CheckOut } from './BurgerBuilder/CheckOut/CheckOut';
import { Order } from './BurgerBuilder/Order/Order';
import Header from './Header/Header';


export const Main = () => {
  return (
  <div>
      <Header></Header>
      
      <div className="container">
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/checkout">
          <CheckOut />
        </Route>
        <Route exact path="/">
          <BurgerBuilder />
        </Route>
      </div>
  </div>);
};
