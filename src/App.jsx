import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Rescidencies from "./components/Residencies/Rescidencies";
import Value from "./components/Value/Value";
import GetStarted from "./components/GetStarted/GetStarted";


function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Rescidencies/>
      <Value/>
      <GetStarted/>
    </div>
  );
}

export default App;
