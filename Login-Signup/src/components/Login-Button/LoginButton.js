import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const LoginButton = ({ handleNextPage }) => {
  return (
    <>
      <div className="signup-btn-container">
        <button onClick={handleNextPage}>Login</button>
      </div>

      <div className="signup-account-container">
        <p>
          No account?{" "}
          <Link style={{ color: "rgb(0,122,255)" }} to="/">
            create one
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginButton;
