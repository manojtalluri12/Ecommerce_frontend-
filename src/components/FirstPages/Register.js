import React from "react";
import {Link} from 'react-router-dom'
import { useMyData } from "../../Ecomcontext/Ecomcontext";

const Register = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmpassword,
    SetConfirmPassword,
    handleRegister,
  } = useMyData();
  return (
    <div>
       <h1 className="text-center">Register</h1>
      <form onSubmit={handleRegister} className="forms">
        <input
          type="text"
          value={username}
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <input
          type="password"
          value={confirmpassword}
          placeholder="Enter your confirmpassword"
          onChange={(e) => SetConfirmPassword(e.target.value)}
          className="input"
        />
        <button>Register</button>
      </form>
      <div  className="grid">
        <div>Alredy have an account</div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Register;
