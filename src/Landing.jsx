import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./Landing.css"
import Rescidencies from "./components/Residencies/Rescidencies";
import Value from "./components/Value/Value";
import GetStarted from "./components/GetStarted/GetStarted";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import { Routes, Route } from "react-router-dom";
// import CreateCampaign from "./components/CreateCampaign/CreateCampaign";


function Landing() {
  return (
    <div className="Landing">
      <div>
        <div className='white-gradient'/>
        <Header/>
        {/* <Routes>
            <Route to="/create-campaign" component={CreateCampaign}/>
        </Routes> */}
        <Hero/>
      </div>
      <Rescidencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default Landing;