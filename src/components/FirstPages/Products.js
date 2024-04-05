

import React, { useEffect, useState } from 'react'
import { useMyData } from '../../Ecomcontext/Ecomcontext';
import PacmanLoader from "react-spinners/PacmanLoader";
const Products = () => {
    const {eventhandle}=useMyData()
    const [data,setdata]=useState([])
    const [show,setshow]=useState([])
    useEffect(()=>{
        setshow(true)
        const dataFetch=async()=>{
            const res=await fetch('https://dummyjson.com/products?limit=5')
            const data=await res.json()
            setdata(data.products);
            setshow(false)
        }
        dataFetch()
        
    },[])
  return (
    <div>
        {
            show && <h1><PacmanLoader color="#36d7b7" /></h1>
        }
         <div className="productCard">
        {
            data.length >0 && data.map((each)=>{
                const {id,title,price,thumbnail}=each
                return <div key={id} className="prodcutcards" onClick={eventhandle}>
                    <div>
                        <img src={thumbnail} alt='title' className="productimg"/>
                    </div>
                    <div className="productcenter">
                        <p  className="producttitle">{title}</p>
                        <button className="button">${price}</button>
                    </div>
                </div>
            })
        }
    </div>
    </div>
   
  )
}

export default Products