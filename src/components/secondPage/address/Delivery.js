import React, { useState } from "react";
import Summary from "./Summary";
import Payment from "./Payment";
import { useNavigate, useParams } from "react-router-dom";
import { useMyData } from "../../../Ecomcontext/Ecomcontext";
import Shipping from "./Shipping";
const Delivery = () => {
    const nav=useNavigate()
  const { cart,token }=useMyData()
  //console.log(cart);
  const { id } = useParams();
 // console.log(id);
  const findingpart = cart.find((each) => each._id == id);
 
  //console.log(findingpart);
  const [step, setStep] = useState(0);
  const datas = [
    <Shipping />,
    <Summary   findingpart={ findingpart}/>,
    <Payment   findingpart={findingpart} />,
  ];
  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };
  const handleContune = () => {
    if (step < 2) setStep(step + 1);
  };
  if (!token) {
    return nav("/login");
  }
  return (
    <div>
      <div>
        <div className="devlieryprocess">
          <p className={step >= 0 ? "process1" : ""}>1</p>
          <p className={step >= 1 ? "process1" : ""}>2</p>
          <p className={step >= 2 ? "process1" : ""}>3</p>
        </div>
        <div className="MainProcess">{datas[step]}</div>
      </div>
      <div className="belowprocess">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleContune}>Next</button>
      </div>
    </div>
  );
};

export default Delivery;