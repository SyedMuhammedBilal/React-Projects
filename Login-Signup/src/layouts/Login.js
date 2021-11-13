import React from "react";
import Heading from "../components/Heading/Heading";
import LoginInputFields from "../components/Login-Input-Fields/LoginInputFields";

function Login() {
  return (
    <>
      <Heading marginTop={8} heading="Login Page" />
      <LoginInputFields />
    </>
  );
}

export default Login;
