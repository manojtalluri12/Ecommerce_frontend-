import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMyData } from '../../../Ecomcontext/Ecomcontext'

const Summary = ({ findingpart}) => {
   // console.log(findingpart);
    const {token,deleteAddress}=useMyData()
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get('https://ecommerce-backend-cyuz.onrender.com/getaddress',{
            headers:{
                'x-token':token
            }
        }).then((res)=>setdata(res.data))
    },[])
    console.log(data);
  return (
    <div>
       
        <div className="addressummary">
        <h4 className='text-center'>SUMMARY </h4>
        <p className="summarypara">
          if you want change address delete address and go back enter new
          address
        </p>
        {
            data.length >1 &&  <h3>delete one of the below two</h3>
        }
    
        <p>Delivey Address:- </p>
        {data.map((each) => {
          const {  address,city,pin } = each;
          return (
            <div>
              <p>{address}</p>
              <p>{city}</p>
              <p>{pin}</p>
              <button onClick={()=>deleteAddress(each._id)} >delete</button>
            </div>
          );
        })}
      </div>
      <div className="summarygrid">
        <div>
          <img
            src={findingpart.thumbnail}
            alt={findingpart.id}
            className="summaryimages"
          />
        </div>
        <div>
          <p>{findingpart.title}</p>
          <p>${findingpart.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Summary