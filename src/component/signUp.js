import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email,
        password,
      });
      console.log("sign up response-", response)
      alert("user created successfully!!");
      if(response.status === 200){
        navigate('/login')
      }
    } catch (err) {
      alert("User already exists!!");
    }
  };

  return (
    <div className="box-layout">
      <div>
        <h1>Sign Up</h1>
      </div>
      <div>
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
        <button className="button_style" type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <div>
        <div>
          Already Registered{" "}
          <h5>
            <Link to="/login">Login </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
