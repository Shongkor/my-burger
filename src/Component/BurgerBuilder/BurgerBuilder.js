import React, { useState } from 'react';
import { Control } from './Control/Control';
import { Ingredients } from './Ingredients/Ingredients';
import { Button, Modal, ModalBody} from 'reactstrap';
import { OrderModal } from './OrderModal/OrderModal';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, disabled, removeIngredient } from '../../Redux/action';

export const BurgerBuilder = () => {
  const reduxState = useSelector(state =>state);
  const dispatch =useDispatch();
  let history = useHistory();
  let [state,setState] = useState(
    {
    isModalOpen: false,

},
)

  const HandleAdding = which => {
    dispatch(addIngredient(which))
    handleDisabled();


  }
  const HandleRemoving = which => {
    dispatch(removeIngredient(which));

    handleDisabled();
  }
  const handleModal =()=>{
    setState({...state , isModalOpen : !state.isModalOpen});

  }
  const handleDisabled =()=>{
    dispatch(disabled())

  }
  const toCheckOut= (props) =>{
    history.push('/checkout');
  }

  return (
  <div className="d-flex flex-md-row flex-column align-items-center">
     <Ingredients ingredients={reduxState.ingredients} />
     <Control 
     disabled={reduxState.disabled}
     state={reduxState.ingredients}
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
          <OrderModal orderHistory={reduxState.ingredients}></OrderModal> 

        </ModalBody>
        <div>
        <h5 className="text-center">
          Total Price: {reduxState.totalPrice} TK
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

