import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Rescidencies from "./components/Residencies/Rescidencies";


function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Rescidencies/>
    </div>
  );
}

export default App;
