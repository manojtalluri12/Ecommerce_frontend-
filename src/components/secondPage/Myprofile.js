import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

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
    notifyerror,
  } = useMyData();

  const nav = useNavigate();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://ecommerec.onrender.com/user", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setloading(false);
        setprofiledata(res.data);
      })
      .catch((err) => {
        notifyerror(err.response.data.message);
        return nav("/login");
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
        {
           loading ? <ClipLoader color="#36d7b7" /> : ( 
            <>
           <input
            value={
              profiledata.username
            }
            className="input"
            onChange={(e) => setupdateusername(e.target.value)}
          />
          <input
          value={profiledata.email}
          className="input"
          onChange={(e) => setupdateemail(e.target.value)}
        />
        </>)
        }
       
      
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
