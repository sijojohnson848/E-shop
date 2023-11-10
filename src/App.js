import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        {/* <Route path={"*"} element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
