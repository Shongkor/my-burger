import React, { useState } from 'react';
import { Control } from './Control/Control';
import { Ingredients } from './Ingredients/Ingredients';
import { Button, Modal, ModalBody} from 'reactstrap';
import { OrderModal } from './OrderModal/OrderModal';
import { useHistory } from 'react-router-dom';

export const BurgerBuilder = () => {
  let history = useHistory();
  let [state,setState] = useState(
    {ingredients : [
      {type: 'Salad', amount: 0, price : 10},
      {type: 'Meat', amount: 0, price : 10},
      {type: 'Cheese', amount: 0, price : 10},
    ],
    isModalOpen: false,
    disabled : false,

},
)
  const [price,setPrice] =useState(
    {
    totalPrice : 100,
    fixedPrice :100,
    }

  )
 console.log(state)
  const HandleAdding = which => {

    state.ingredients.forEach(item => {
      if(item.type === which){
        item.amount += 1;
        let tk= parseInt(price.totalPrice) + item.price;
        
        setPrice({...price,totalPrice :tk});
        

      }
      
    })
    handleDisabled();


  }
  const HandleRemoving = which => {
    state.ingredients.forEach(item => {
      if(item.type === which){
        if(item.amount >0){
          item.amount--;
          let tk= parseInt(price.totalPrice) - item.price;
          const totalPrice = {...price,totalPrice :tk}
          setPrice(totalPrice);
          console.log(price)
      }
    }})

    handleDisabled();
  }
  const handleModal =()=>{
    setState({...state , isModalOpen : !state.isModalOpen});

  }
  const handleDisabled =()=>{
    // 1st process

    // const sum=state.ingredients.reduce((s,item) => {
    //   return s + item.amount;
    // },0)
    // setState({...state ,disabled : sum>0})
    // console.log(sum)
    // console.log(state)

    let sum=0;
     sum = state.ingredients.forEach(item=>{
      if(item.amount !==0){
         sum++
      }
      if(sum > 0){
        setState({...state , disabled : true})
      }else{
        
        setState({...state , disabled : false})
      }
      
    })

    
    // if(price.totalPrice === price.fixedPrice){
    //   state.disabled = true;
    //   setState({...state , disabled : state.disabled});
    // }
    // else{
    //   state.disabled = false;
    //   setState({...state , disabled : state.disabled});
    // }
  }
  const toCheckOut= (props) =>{
    history.push('/checkout');
  }

  return (
  <div className="d-flex flex-md-row flex-column align-items-center">
     <Ingredients ingredients={state.ingredients} />
     <Control 
     disabled={state.disabled}
     state={state.ingredients} 
     price={price}
     handleModal={handleModal}
     adding={HandleAdding} 
     removing={HandleRemoving}
     /> 

    <div>
      <Modal className="" isOpen={state.isModalOpen}>
          <div className="text-center pt-5">
          <h5>
              Your Order History
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
          <Button onClick={toCheckOut} className="btn btn-success">Confirm</Button>
          <Button onClick={handleModal} className="btn btn-danger">Cancel</Button>
        </div>
        </Modal>
     </div> 
  </div>
  );
};

