import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
function App() {
  // States
  const [ipAddress, setipAddress] = useState(``);
  const [ipInfo, setipInfo] = useState(``);

  // Handler Functions
  const inputHandler = function (e) {
    setipAddress(e.target.value);
    console.log(ipAddress);
  };

  const clickHandler = function () {};
  //Methods
  const loadResults = function (ip) {
    fetch(ip)
      .then((res) => res.json)
      .then((data) => setipInfo(data));
  };
  //JSX

  return (
    <div className="App">
      <Search inputHandler={inputHandler} clickHandler={clickHandler} />
    </div>
  );
}

export default App;
