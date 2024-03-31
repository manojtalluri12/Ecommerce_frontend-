import React from "react";
import { useMyData } from "../../Ecomcontext/Ecomcontext";
import { Link } from "react-router-dom";

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useMyData();
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form className="forms" onSubmit={handleLogin}>
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
        <button>Login</button>
      </form>
      <div  className="grid">
        <div>If you not register</div>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Login;
