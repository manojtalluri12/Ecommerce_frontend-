import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMyData} from '../../Ecomcontext/Ecomcontext.js'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const UpNavbar = () => {
  const nav=useNavigate()
  const {menu,setmenu, handlemenu,token}=useMyData()
  return (
    <div className="navbar">
      <div className="navleft">
        <Link to="/" className="links">SHOP</Link>
      </div>
      {
        menu ?(<CiMenuFries className="menu" onClick={ handlemenu}/>):(< RxCross2 className="menu" onClick={ handlemenu}/>)
      }
      <div className={menu ?"active":"navright"}>
        <Link to="/register" className="links">Register</Link>
        <Link to="/login" className="links">Login</Link>
      </div>
    </div>
  );
};

export default UpNavbar;
