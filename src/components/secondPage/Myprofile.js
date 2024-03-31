import axios from "axios";
import React, { useEffect } from "react";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
import { useNavigate } from "react-router-dom";

const Myprofile = () => {
  const {
    token,
    profiledata,
    setprofiledata,
    handledeleteProfile,
    handleUpdateprofile,
    updateusername,
    setupdateusername,
    updateemail,
    setupdateemail,
    notifyerror
  } = useMyData();
  
  const nav = useNavigate();
 
  useEffect(() => {
    axios
      .get("https://ecommerce-backend-cyuz.onrender.com/user", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setprofiledata(res.data))
      .catch((err) => {
        notifyerror(err.response.data.message);
      });
  }, []);
  if (!token) {
    return nav("/login");
  }
  return (
    <div className="myprofile">
      <div>
        <h1>MY PROFILE</h1>
      </div>
      <div className="col">
        <input
          value={profiledata.username}
          className="input"
          onChange={(e) => setupdateusername(e.target.value)}
        />
        <input
          value={profiledata.email}
          className="input"
          onChange={(e) => setupdateemail(e.target.value)}
        />
      </div>
      <div className="updel">
        <button
          className="delete"
          onClick={() => handledeleteProfile(profiledata._id)}
        >
          Delete profile
        </button>
      </div>
    </div>
  );
};

export default Myprofile;
