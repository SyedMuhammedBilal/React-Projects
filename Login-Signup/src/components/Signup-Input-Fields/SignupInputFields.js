import React from "react";
import "./styles.css";

const SignupInputFields = () => {
  return (
    <div className="signup-input-container">
      <div className="signup-input-field">
        <input placeholder="Name" />
      </div>
      <div className="signup-input-field">
        <input placeholder="Email" />
      </div>
      <div className="signup-input-field">
        <input placeholder="password" />
      </div>
    </div>
  );
};

export default SignupInputFields;
