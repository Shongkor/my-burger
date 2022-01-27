import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'reactstrap';

export const Control = () => {
    const controlElement = [
        {type: "Salad", name: "salad"},
        {type: "Cheese", name: "cheese"},
        {type: "Meat", name: "meat"}
    ];
    const MenuElement = (props) =>{
      
            return(
                <div className="d-flex">
                    <div >
                    <p >{props.controls.type} : </p>
                    </div>
                    <div className="ms-auto">
                    <button className="btn btn-danger m-1">Less</button>
                    <button className="btn btn-success">More</button>
                    </div>
                </div>
            )
    }
  return (
  <div className="my-5 col-md-5">
      <Card className="text-center">
          <CardHeader style={{backgroundColor: "#D70F64", color: "#fff"}}>
            <h2>Add Ingredient</h2>
          </CardHeader>
          <CardBody>
          {controlElement.map(element => (
          <MenuElement controls={element} />
          ))}
          </CardBody>
          <CardFooter>
            Total Price: TK
          </CardFooter>
      </Card>
  </div>
  );
};
