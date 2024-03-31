import React from "react";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
import BelowNavbar from "./BelowNavbar";
import UpNavbar from "./UpNavbar";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { token } = useMyData();

  return <div>{token ? <BelowNavbar /> : <UpNavbar />}</div>;
};

export default Navbar;
