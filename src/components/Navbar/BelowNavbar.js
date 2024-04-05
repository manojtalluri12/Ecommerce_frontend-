import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyData } from "../../Ecomcontext/Ecomcontext.js";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { useTheme } from "../../theme-context/theme-context.js";
import { CiLight, CiDark } from "react-icons/ci";
import axios from "axios";
const BelowNavbar = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [data,setdata]=useState('')
  const nav = useNavigate();
  const { menu, setmenu, handlemenu, settoken, token, notifyerror } = useMyData();
  useEffect(() => {
    axios
      .get("https://ecommerec.onrender.com/user", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setdata(res.data))
      .catch((err) => {
        notifyerror(err.response.data.message);
      });
  }, []);
  return (
    <div className="navbar">
      <div className="navleft">
        <Link to="/" className="links">
          SHOP
        </Link>
      </div>
      {menu ? (
        <CiMenuFries className="menu" onClick={handlemenu} />
      ) : (
        <RxCross2 className="menu" onClick={handlemenu} />
      )}
      <div className={menu ? "active" : "navright"}>
        
      <Link to="/products" className="links">
          Products
        </Link>
        <div class="dropdown">
          <button class="dropbtn">
          <FaUserAlt size={20} className="imgesss"/>
            {data.username}
          </button>
          <div class="dropdown-content">
            <Link to="/orders" className="links">
              Orders
            </Link>
            <Link to="/myprofile" className="links">
              Profile
            </Link>
            <Link onClick={toggleTheme} className="links">
              {isDark ? <CiDark size={20} /> : <CiLight size={20} />}
            </Link>
            <Link className="links" onClick={() => settoken(null)}>
              Logout
            </Link>
          </div>
        </div>
     
        <Link to="/cart" className="links">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default BelowNavbar;
