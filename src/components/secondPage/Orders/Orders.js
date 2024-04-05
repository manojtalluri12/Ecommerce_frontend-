import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMyData } from '../../../Ecomcontext/Ecomcontext'
import { useNavigate } from 'react-router-dom'
import OrderList from './OrderList'
import OrderPad from './OrderPad'

const Orders = () => {
  const nav=useNavigate()
  const {token,orders,setorders,notifyerror}=useMyData()
  useEffect(() => {
    axios
      .get("https://ecommerec.onrender.com/getorders", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) =>{ setorders(res.data)}).catch((err) => {
        notifyerror(err.response.data.message);
        return nav("/login");
      });
  }, []); 
  if(!token){
    return nav('/login')
  }
  
  return (
    <>
     {orders.length === 0 && <h1 className="ordertitle">No items in order</h1>}
    <div className="OrderList">
   
      <div className="ordergridleft">
        {orders.map((each) => {
          return (
            <OrderList
              id={each._id}
              title={each.title}
              price={each.price}
              thumbnail={each.thumbnail}
            ></OrderList>
          );
        })}
      </div>
    <div className="ordergridright">
    {
      orders.length >=1 && <OrderPad/>
    }
      </div>
  </div>
  </>
  )
}

export default Orders