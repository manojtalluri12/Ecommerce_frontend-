import React, { useState } from "react";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
import Rproduct from "./Rproduct";
const DetailofProduct = ({
  pro,
  imgs
}) => {
const {Handleone,boxin,productdata,handleCart}=useMyData()
  return (
    <div key={pro._id}>
      <div className="cardd">
        <div className="left">
          <div>
            <img src={imgs[boxin]} alt={pro.id} className="imgss" />
          </div>
          <div className="flex">
            {imgs.map((each, index) => {
              return (
                <div className="flex">
                  <img
                    src={imgs[index]}
                    alt="bkbk"
                    className="size"
                    onClick={() => Handleone(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <p className="rightside">{pro.description}</p>
          <p className="green rightside">{pro.rating} ✩</p>
          <p className="rightside">
            {" "}
            <span className="detspan">Brand: </span>
            {pro.brand}
          </p>
          <p className="rightside">
            <span className="detspan">category: </span>
            {pro.category}
          </p>
          <h1 className="title rightside">{pro.title}</h1>
          <p className="rightside">
            {" "}
            <span className="detspan">Special price : </span>{" "}
            <span className="price">${pro.price}</span> <strike>$ 999</strike>
          </p>
          <button onClick={()=>handleCart(pro._id)}>
           Add Cart
          </button>
        </div>
      </div>
      <hr />
      <h3 className="text-center">Related Products</h3>
      <hr />
      <div className="RetatedProducts">
       <Rproduct pro={pro} productdata={productdata}/>
      </div>
    </div>
  );
};
export default DetailofProduct;
