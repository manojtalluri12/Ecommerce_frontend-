

import React, { useEffect, useState } from 'react'
import { useMyData } from '../../Ecomcontext/Ecomcontext';

const Products = () => {
    const {eventhandle}=useMyData()
    const [data,setdata]=useState([])
    useEffect(()=>{
        const dataFetch=async()=>{
            const res=await fetch('https://dummyjson.com/products?limit=5')
            const data=await res.json()
            setdata(data.products);
        }
        dataFetch()
    },[])
  return (
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
  )
}

export default Products