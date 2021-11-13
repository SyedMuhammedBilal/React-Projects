import React from "react";
import "./styles.css";

export default function Heading(props) {
  return (
    <div
      style={{ marginTop: `${props.marginTop}rem` }}
      className="heading-container"
    >
      <h1> {props.heading} </h1>
    </div>
  );
}
