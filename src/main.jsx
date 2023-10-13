import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./Landing";
import CreateCampaign from "./components/CreateCampaign/CreateCampaign";
import Register from "./components/Register/Register";
import CreateAccount from "./components/CreateAccount/CreateAccount";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      {/* <Landing /> */}
    </React.StrictMode>
  </BrowserRouter>
);
