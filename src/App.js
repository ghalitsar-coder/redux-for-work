import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Users, UserNew } from "./modules/users/pages/index";
import NavbarComp from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/detail/:role/:userId" element={<UserNew />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
