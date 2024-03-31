import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailofProduct from "./DetailofProduct";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
const Details = () => {
  const nav = useNavigate();

  const { productdata, token } = useMyData();
  const { id } = useParams();
  const pro = productdata.find((each) => {
    return each._id == id;
  });
  const imgs = [pro.img1, pro.img2, pro.img3, pro.img4];
  if (!token) {
    return nav("/login");
  }
  return (
    <div className="Main">
      <div className="CARD">
        <DetailofProduct pro={pro} imgs={imgs} />
      </div>
    </div>
  );
};

export default Details;
