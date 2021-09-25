import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Info from "./components/Info";
import Map from "./components/Map";
function App() {
  // States
  const [ipAddress, setipAddress] = useState(``);
  const [ipInfo, setipInfo] = useState(``);
  const [pos, setpos] = useState([48.864716, 2.349]);

  // Handler Functions
  const inputHandler = function (e) {
    setipAddress(e.target.value);
  };

  const clickHandler = function () {
    loadInfo(ipAddress);
  };
  //Methods
  const loadInfo = function (ip) {
    fetch(`https://ipapi.co/${ip}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setipInfo(data);
        console.log(data);
        setpos([data.latitude, data.longitude]);
      });
  };

  //JSX

  return (
    <div className="App">
      <Search inputHandler={inputHandler} clickHandler={clickHandler} />
      <Info data={ipInfo} />
      <Map position={pos} />
    </div>
  );
}

export default App;
