import axios from "axios";
import React, { useEffect } from "react";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
import BarLoader from "react-spinners/BarLoader";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
const Myproduct = () => {
  const notifyerror = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",

    });
  const nav = useNavigate();
  const { token, productdata, setproductdata, loading, setloading } =
    useMyData();
  useEffect(() => {
    setloading(true);
    axios
      .get("https://ecommerce-backend-cyuz.onrender.com/getproduct", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setproductdata(res.data);
        setloading(false);
      })
      .catch((err) => {
        notifyerror(err.response.data.message);
        setloading(false);
      });
  }, []);
  if (!token) {
    return nav("/login");
  }
  return (
    <div>
      {loading && (
        <div className="textcenter">
          <BarLoader color="#36d7b7" />
        </div>
      )}
      <div className="productCard">
        {productdata.length > 0 &&
          productdata.map((each) => {
            const { title, price, thumbnail } = each;
            return (
              <Link
                to={`/details/${each._id}`}
                key={each._id}
                className="prodcutcards"
              >
                <div>
                  <img src={thumbnail} alt="title" className="productimg" />
                </div>
                <div className="productcenter">
                  <p className="producttitle">{title}</p>
                  <button className="button">${price}</button>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Myproduct;
