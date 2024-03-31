import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyData } from "../../Ecomcontext/Ecomcontext.js";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "../../theme-context/theme-context.js";
import { CiLight, CiDark } from "react-icons/ci";
const BelowNavbar = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const nav = useNavigate();
  const { menu, setmenu, handlemenu, settoken, token } = useMyData();
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
        <Link to="/cart" className="links">
          Cart
        </Link>
        <Link to="/orders" className="links">
          Orders
        </Link>
        <Link to="/myprofile" className="links">
          Profile
        </Link>
        <Link onClick={toggleTheme} className="links">
          {isDark ? <CiDark size={20} /> : <CiLight size={20} />}
        </Link>
        <Link  className="links" onClick={() => settoken(null)}>Logout</Link>
      </div>
    </div>
  );
};

export default BelowNavbar;
