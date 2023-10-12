import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Rescidencies from "./components/Residencies/Rescidencies";
import Value from "./components/Value/Value";


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
    </div>
  );
}

export default App;
