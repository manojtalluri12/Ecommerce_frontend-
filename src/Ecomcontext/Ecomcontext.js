import { createContext, useContext, useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Ecomcontext = createContext();

const EcomProvider = ({ children }) => {
  const notifysucess = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
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
  const [loginusername, loginUsername] = useState("");
  const [loading,setloading]=useState(false)
  const [loginemail, loginEmail] = useState("");
  const [menu, setmenu] = useState(true);
  const [address, setaddress] = useState("");
  const [updateusername, setupdateusername] = useState("");
  const [updateemail, setupdateemail] = useState("");
  const [orders, setorders] = useState([]);
  const [city, setcity] = useState("");
  const [pin, setpin] = useState("");
  const [changes, setchanges] = useState(1);
  const [cart, setcart] = useState([]);
  const [boxin, SetboxIn] = useState(0);
  const [profiledata, setprofiledata] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, SetConfirmPassword] = useState("");
  const [token, settoken] = useState();
  const [productdata, setproductdata] = useState([]);
  const Handleone = (p) => {
    SetboxIn(p);
  };
  const handleShipping = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://ecommerec.onrender.com/address",
        { address, city, pin },
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then((res) => {
        notifysucess(res.data.message);
      })
      .catch((err) => {
        notifyerror(err.response.data.message)
      });
    setaddress("");
    setpin("");
    setcity("");
  };
  const deleteAddress = (id) => {
    axios
      .delete(`https://ecommerec.onrender.com/deleteaddress/${id}`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        notifysucess(res.data.message);
      });
  };
  const handlemenu = () => {
    setmenu((s) => !s);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://ecommerec.onrender.com/register", {
        username,
        email,
        password,
        confirmpassword,
      })
      .then((res) => {
        notifysucess(res.data.message)
       // alert(res.data.message);
        nav("/login");
      })
      .catch((err) => {
        notifyerror(err.response.data.message)
      //  alert(err.response.data.message);
      });
    setUsername("");
    setEmail("");
    setPassword("");
    SetConfirmPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://ecommerec.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        settoken(res.data.token);
        nav("/products");
      })
      .catch((err) => {
        notifyerror(err.response.data.message)
        //alert(err.response.data.message);
      });
    if (!token) {
      return nav("/login");
    }
    setEmail("");
    setPassword("");
  };
  const handleCart = (id) => {
    console.log(id);
    const find = productdata.find((each) => each._id == id);
    console.log(find);
    axios
      .post(
        "https://ecommerec.onrender.com/cart",
        {
          title: find.title,
          description: find.description,
          price: find.price,
          rating: find.rating,
          brand: find.brand,
          category: find.category,
          thumbnail: find.thumbnail,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then((res) => notifysucess(res.data.message));
  };
  const handleDeletecart = (id) => {
    axios
      .delete(`https://ecommerec.onrender.com/deletecart/${id}`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        notifysucess(res.data.message);
        nav("/products");
      });
  };
  const handleplaceOrder = (id) => {
    const find = cart.find((each) => each._id == id);
    axios
      .post(
        "https://ecommerec.onrender.com/orders",
        {
          title: find.title,
          description: find.description,
          price: find.price,
          rating: find.rating,
          brand: find.brand,
          category: find.category,
          thumbnail: find.thumbnail,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then((res) => {
        notifysucess(res.data.message);
        nav("/orders");
      });
    axios
      .delete(`https://ecommerec.onrender.com/deletecart/${id}`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        console.log(res.data.message);
      });
  };
  const handledeleteProfile = (id) => {
    axios
      .delete(`https://ecommerec.onrender.com/prodelte/${id}`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        notifysucess(res.data.message);
        settoken(null);
      });
    if (!token) {
      return nav("/login");
    }
  };
  const handleUpdateprofile = (id) => {
    console.log(id);
    axios
      .patch(
        `https://ecommerec.onrender.com/proedit/${id}`,
        {
          username: updateusername,
          email: updateemail,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      )
      .then((res) => {
        notifysucess(res.data.message);
      })
      .catch((err) => {
        notifyerror(err.response.data.message);
      });
  };
  const eventhandle = () => {
    if (!token) {
      return nav("/login");
    }
    if (token) {
      return nav("/products");
    }
  };
  return (
    <Ecomcontext.Provider
      value={{
        menu,
        setmenu,
        handlemenu,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmpassword,
        SetConfirmPassword,
        handleRegister,
        handleLogin,
        token,
        settoken,
        productdata,
        setproductdata,
        boxin,
        SetboxIn,
        Handleone,
        profiledata,
        setprofiledata,
        handleCart,
        cart,
        setcart,
        handleDeletecart,
        changes,
        setchanges,
        handleShipping,
        address,
        setaddress,
        city,
        setcity,
        pin,
        setpin,
        deleteAddress,
        handleplaceOrder,
        orders,
        setorders,
        handledeleteProfile,
        handleUpdateprofile,
        updateusername,
        setupdateusername,
        updateemail,
        setupdateemail,
        loginusername,
        loginUsername,
        loginemail,
        loginEmail,
        eventhandle,
        loading,setloading,
        notifyerror
      }}
    >
      {children}
    </Ecomcontext.Provider>
  );
};

function useMyData() {
  const context = useContext(Ecomcontext);
  return context;
}
export { EcomProvider, useMyData };
