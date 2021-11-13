import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./layouts/Login";
import Signup from "./layouts/Signup";
import Home from "./layouts/Home";
import { useDataLayerValue } from "./store";

function App() {
  const [{ authenticate }] = useDataLayerValue();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          {authenticate ? (
            <Route exact path="/home" element={<Home />} />
          ) : null }
        </Routes>
      </Router>
    </>
  );
};

export default App;