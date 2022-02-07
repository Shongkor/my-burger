import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';

export const Control = (props) => {
    const MenuElement = (props) =>{
      
            return(
                <div className="d-flex">
                    <div >
                    <h5 >{props.controls.type} ({props.controls.amount}): </h5>
                    </div>
                    <div className="ms-auto">
                    <button className="btn btn-danger m-1" onClick={props.removing}>Less</button>
                    <button className="btn btn-success" onClick={props.adding}>More</button>
                    </div>
                </div>
            )
    }
  return (
  <div className="my-5 col-md-5 col-12">
      <Card className="text-center">
          <CardHeader style={{backgroundColor: "#D70F64", color: "#fff"}}>
            <h2>Add Ingredient</h2>
          </CardHeader>
          <CardBody>
          {props.state.map(element => (
          <MenuElement 
          key={Math.random()}
          controls={element} 
          adding={()=>props.adding(element.type)}
          removing={()=>props.removing(element.type)}
          />
          ))}
          </CardBody>
          <CardFooter>
            Total Price: {props.price.totalPrice} TK
          </CardFooter>
          <button disabled={!props.disabled} className="btn btn-primary mt-3" onClick={props.handleModal}>Order Now</button>
      </Card>
  </div>
  );
};
