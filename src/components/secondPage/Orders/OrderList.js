import React from "react";
import {Link} from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

const OrderList = ({ id, thumbnail, title, price }) => {
  return (
    <Link key={id} className="ordercards">
      <div className="left">
        <img src={thumbnail} alt={id} className="orderimg" />
      </div>
      <div className="right">
        <p className="span ordertitle">item is ordered</p>
        <h1 className="ordertitle">{title}</h1>
        <p className="ordertitle"> ${price}</p>
      </div>
      <p className="orderarrow">
        <FaLongArrowAltRight size={20}/>
      </p>
    </Link>
  );
};

export default OrderList;