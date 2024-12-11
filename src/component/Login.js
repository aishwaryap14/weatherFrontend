import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(email);
  console.log(password);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log("token-", response);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (err) {
      console.log("err login-", err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="box-layout">
      <h1>Login</h1>
      <input
        className="input-style"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <input
        className="input-style"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/>
      <button className="button_style" type="submit" onClick={handleLogin}>
        Login
      </button>
      <div>
        <div className="bottom-style">
          Not Registered yet?{" "}
          <h5 style={{marginLeft:'5px', textDecoration:'none', color: 'inherit'}}>
            <Link to="/signup">Sign Up </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
