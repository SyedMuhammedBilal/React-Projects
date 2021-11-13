import React, { useState, useEffect } from "react";
import { useDataLayerValue } from "../../store";
import LoginButton from "../Login-Button/LoginButton";
import { useNavigate } from 'react-router-dom';
import "./styles.css";

const LoginInputFields = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [{ email, password, authenticate }, dispatch] = useDataLayerValue();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextPage = () => {
    if(authenticate) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  }

  useEffect(() => {
    if(userEmail && email && userPassword && password) {
      dispatch({
        type: 'SET_AUTHENTICATE',
        authenticate: true
      }) 
    } else {
      dispatch({
        type: 'SET_AUTHENTICATE',
        authenticate: false
      }) 
    }
  }, [handleNextPage, authenticate])

  console.log('AUTH: ', authenticate)


  return (
    <>
      <div className="signup-input-container">
        <div className="signup-input-field">
          <input
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="signup-input-field">
          <input
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="password"
          />
        </div>
      </div>
      <LoginButton handleNextPage={handleNextPage} />
    </>
  );
};

export default LoginInputFields;
