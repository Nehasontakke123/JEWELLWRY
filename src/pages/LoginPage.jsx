// src/pages/LoginPage.jsx
import React from "react";

const LoginPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login Page</h2>
      <form>
        <input type="email" placeholder="Enter Email" /><br /><br />
        <input type="password" placeholder="Enter Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
