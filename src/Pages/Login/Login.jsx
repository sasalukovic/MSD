import React, { useState } from "react";
import "./login.scss"
// fetch data - POST METHOD
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = (credentials) => {
    return fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer <USER ACCESS TOKEN>",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((data) => {
        // TOKEN
        const token = data.accessToken;
        // STAVI GA U STATE
        props.setToken(token)
        localStorage.setItem("storedToken", token);
      })
      .catch((error) => console.log(error));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email,
      password,
    });
  };
  return (
    <div className="login-wrapper">
      <div className="naslov">
        <h1>Log In</h1>
      </div>
      <div className="form">
        <form>
          <label>
            <p>Username:</p>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Username"/>
          </label>
          <label>
            <p>Password:</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              />
          </label>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;