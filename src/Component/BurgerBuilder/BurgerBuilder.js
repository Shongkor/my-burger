import React, { useState } from 'react';
import { Control } from './Control/Control';
import { Ingredients } from './Ingredients/Ingredients';
import { Button, Modal, ModalBody} from 'reactstrap';
import { OrderModal } from './OrderModal/OrderModal';

export const BurgerBuilder = () => {
  let [state,setState] = useState(
    {ingredients : [
      {type: 'Salad', amount: 0, price : 10},
      {type: 'Meat', amount: 0, price : 10},
      {type: 'Cheese', amount: 0, price : 10},
    ],
    isModalOpen: false,
    disabled : true
  
},
)
  const [price,setPrice] =useState(
    {
    totalPrice : 10,
    fixedPrice :10,
    }

  )
  const HandleAdding = which => {

    state.ingredients.forEach(item => {
      if(item.type === which){
        item.amount += 1;
        let tk= parseInt(price.totalPrice) + item.price;
        
        setPrice({...price,totalPrice :tk});
        
        handleDisabled();
        console.log(price)
      }
      
    })


  }
  const HandleRemoving = which => {
    handleDisabled()
    state.ingredients.forEach(item => {
      if(item.type === which){
        if(item.amount >0){
          item.amount--;
          let tk= parseInt(price.totalPrice) - item.price;
          console.log(price)
          const totalPrice = {...price,totalPrice :tk}
          setPrice(totalPrice);
      }
    }})


  }
  const handleModal =()=>{
    setState({...state , isModalOpen : !state.isModalOpen});

  }
  const handleDisabled =()=>{
    if(price.totalPrice>price.fixedPrice){
      state.disabled = false;
      setState({...state , disabled : state.disabled})
    }
   
  }

  return (
  <div className="d-flex flex-md-row flex-column align-items-center">
     <Ingredients ingredients={state.ingredients} />
     <Control 
     adding={HandleAdding} 
     removing={HandleRemoving} 
     state={state.ingredients} 
     disabled={state.disabled}
     price={price}
     handleModal={handleModal}
     handleDisabled={handleDisabled}
     />
     <div>
     <Modal className="" isOpen={state.isModalOpen}>
        <div className="text-center pt-5">
        <h5>
            Your Order History
            {console.log(state)}
        </h5>
        </div>
       <ModalBody>
        <OrderModal orderHistory={state.ingredients}></OrderModal> 

       </ModalBody>
       <div>
       <h5 className="text-center">
         Total Price: {price.totalPrice} TK
       </h5>
       </div>
       <div className="d-flex justify-content-between py-5 px-5">
        <Button onClick={handleModal} className="btn btn-success">Confirm</Button>
        <Button onClick={handleModal} className="btn btn-danger">Cancel</Button>
       </div>
     </Modal>
     </div>
  </div>
  );
};

