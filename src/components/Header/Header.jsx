import React from "react";
import "./Header.css";
// import { Route, Link, Router, Routes } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import CreateCampaign from "../CreateCampaign/CreateCampaign";
// import Landing from "../../Landing";
// import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          {/* <Routes>
            <Route exact path="/all-campaign" Component={Hero} />
          </Routes> */}
          <Link to="/all-campaign">All Campaigns</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />

          <a href="/create-campaign" className="button-3">
            Create Campaign
          </a>
          <Routes>
            <Route path="/create-campaign" element={<CreateCampaign />} />
          </Routes>
          
          {/* <Link to="/create-campaign">
            <button className="button-3" onClick={CreateCampaign}>
              <a href="">Create Campaign</a>
            </button>
          </Link>
          <br /> */}

          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">
            <button className="button-34">
              <a href="">SignUp</a>
            </button>
          </Link>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Header;

{
  /* <div className="flexCenter h-menu">
          <a href="" >All Campaigns</a>
          <a href="" >Contact</a>
          
          <button className="button-3">
            <a href="" >Create Campaign</a>
          </button>
          <a href="" >Login</a>
          <button className="button-34">
            <a href="" >SignUp</a>
          </button>
        </div> */
}
