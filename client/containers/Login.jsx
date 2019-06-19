import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth.js"

const Login = () => {
  return (
    <div>
      <div>
        <h3>Stardust Login Component</h3>
        <p>Located in containers/Login</p>
      </div>
      <div>
          <GoogleAuth />
      </div>
    </div>
  );
};

export default Login;
