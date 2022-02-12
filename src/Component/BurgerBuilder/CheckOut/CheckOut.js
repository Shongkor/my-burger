import axios from 'axios';
import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { handleIngredientReset } from '../../../Redux/action';

export const CheckOut = () => {
  const reduxState = useSelector(state => state);
  const dispatch =useDispatch()
  const history = useHistory()
  const [customerDetails,setCustomerDetails] =useState(
    {
      address : "",
      phone : "",
      paymentType : "Cash On Delivery",
      isLoading : false,
      isModalOpen : false,
      modalMessage: "",
    }
    
  );
  const handleCustomerInfo =(e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name] : e.target.value,
    })
  };
  
  const handleSubmit =(e)=> {
    setCustomerDetails({isLoading : true})
    const order ={
      ingredients : reduxState.ingredients,
      totalPrice : reduxState.totalPrice,
      CustomerDetails : {
        address : customerDetails.address,
        phone : customerDetails.phone,
        paymentType : customerDetails.paymentType,
      },
      orderDate : new Date()
    }
    console.log(reduxState)
    axios.post("https://burgerbuilder-skproject-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",order)
      .then(response =>{
        if(response.status===200){
          setCustomerDetails({
            isLoading : false,
            isModalOpen : true,
            modalMessage : "Order PlacedOrder Successfully"
          });
          dispatch(handleIngredientReset())
        }else{
          setCustomerDetails({
            isLoading : false,
            isModalOpen : true,
            modalMessage :"Something Went Wrong! Try Again",
          });
        }
      })
      .catch(err =>{
        setCustomerDetails({
          isLoading : false,
          isModalOpen : true,
          modalMessage :"Something Went Wrong! Try Again",
        });
      })

    e.preventDefault()
  }
  const goBack= () =>{
    history.push("/");
  }
  let form = (<div>
                <div style={{borderRadius:"20px",  boxShadow: "5px 5px 5px 5px gray", padding : "30px 30px",}}>
        <h4 className="text-center">
          Total Price : {reduxState.totalPrice}
        </h4>
      </div>

      <div>
        <form className="my-4" style={{borderRadius:"20px",  boxShadow: "5px 5px 5px 5px gray", padding : "10px 30px 30px 30px",}}>
          <h4 className="text-center mb-4">Delivering To</h4>
          <textarea required type="text" onChange={(e)=> handleCustomerInfo(e)} value={customerDetails.address} name="address" placeholder="Your Address" className="form-control"/>
          <br />
          <input required type="text" onChange={(e)=> handleCustomerInfo(e)} value={customerDetails.PhoneNumber} name="phone" placeholder="Your PhoneNumber" className="form-control"/> 
          <br />
          <select required onChange={(e)=> handleCustomerInfo(e)} className="form-control"  name="paymentType" id="">
            <option value={customerDetails.paymentType}>Cash On Delivery</option>
            <option value={customerDetails.paymentType}>Bkash</option>
          </select> 
          <br />
          <br />
          <div className="d-flex m-auto">
          <button className="btn btn-success"  onClick={handleSubmit} disabled={!reduxState.disabled}> Placed Order </button>
          <button className="btn btn-danger ms-auto" onClick={goBack}> Cancel </button>
          </div>
        </form>
      </div>
    </div>)
  return (
    <div>
      {console.log(customerDetails.isModalOpen)}

        {customerDetails.isLoading ? <Spinner /> : form}
      <Modal isOpen={customerDetails.isModalOpen} onClick={goBack}>
        <ModalBody>
          <strong>{customerDetails.modalMessage}</strong>
        </ModalBody>
      </Modal>
    </div>);
};
