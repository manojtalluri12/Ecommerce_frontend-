import React from "react";
import { useMyData } from "../../../Ecomcontext/Ecomcontext";

const CartLeftCard = () => {
  const { cart,changes } = useMyData()
  let sum = cart.reduce(function (prev, current) {
    return prev + +current.price;
  }, 0);
  let i=sum * changes
  return (
    <div className="cartleft">
      <div>
        <h1 className="pricedtails">PRICE DETAILS</h1>
        <hr></hr>
      </div>
      <div className="cartinsidegrid">
        <div className="padding">
          <p className="padding">Price ({cart.length} item)</p>
        
          <p className="padding"> Delivery Charges</p>
        </div>
        <div className="padding">
          <p className="padding">
            <p>${i}</p>
          </p>
        
          <p className="padding">
            <strike> ₹40</strike> Free
          </p>
        </div>
      </div>
      <hr />
      <div className="cartgrid">
        <p className="padding">Total Price</p>
        <p className="cartgrid">
          ${i > 1000 ? `${i - 100}` : `${i - 10}`}
        </p>
      </div>
    </div>
  );
};

export default CartLeftCard;