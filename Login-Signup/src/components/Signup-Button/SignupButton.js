import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SignupButton = () => {
  return (
    <>
      <div className="signup-btn-container">
        <button>Signup</button>
      </div>

      <div className="signup-account-container">
        <p>
          Already have an account?{" "}
          <Link style={{ color: "rgb(0,122,255)" }} to="/login">
            Click here
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupButton;
