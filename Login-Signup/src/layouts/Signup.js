import React from "react";
import Heading from "../components/Heading/Heading";
import SignupButton from "../components/Signup-Button/SignupButton";
import SignupInputFields from "../components/Signup-Input-Fields/SignupInputFields";

function Signup() {
  return (
    <>
      <Heading marginTop={8} heading="Signup Page" />
      <SignupInputFields />
      <SignupButton />
    </>
  );
}

export default Signup;
