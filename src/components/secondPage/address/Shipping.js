import React from "react";
import { useMyData } from "../../../Ecomcontext/Ecomcontext";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const nav = useNavigate();
  const {
    handleShipping,
    address,
    setaddress,
    city,
    setcity,
    pin,
    setpin,
    token,
  } = useMyData();
  if (!token) {
    return nav("/login");
  }

  return (
    <div>
      <div className="text-center">Shipping Address</div>
      <div className="forms">
        <input
          type="text"
          value={address}
          placeholder="Enter address"
          onChange={(e) => setaddress(e.target.value)}
          className="input"
        />
        <input
          type="text"
          value={city}
          placeholder="Enter city"
          onChange={(e) => setcity(e.target.value)}
          className="input"
        />
        <input
          type="text"
          value={pin}
          placeholder="Enter pincode"
          onChange={(e) => setpin(e.target.value)}
          className="input"
        />
        <button onClick={handleShipping}>Continue</button>
      </div>
    </div>
  );
};

export default Shipping;
