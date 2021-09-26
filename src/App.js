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
  const [errMsg, seterrMsg] = useState("");
  // Handler Functions
  const inputHandler = function (e) {
    setipAddress(e.target.value.replace(/\s/g, ""));
  };

  const clickHandler = function () {
    loadInfo(ipAddress);
  };
  //Methods
  const loadInfo = function (ip) {
    fetch(`https://ipapi.co/${ip}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw data.reason;
        if (data.latitude === "Sign up to access")
          throw "IP access restricted!";
        setipInfo(data);
        setpos([data.latitude, data.longitude]);
        seterrMsg("");
      })
      .catch((e) => {
        seterrMsg(e);
      });
  };

  //JSX

  return (
    <div className="App">
      <Search
        inputHandler={inputHandler}
        clickHandler={clickHandler}
        errMsg={errMsg}
      />
      <Info data={ipInfo} />
      <Map position={pos} />
    </div>
  );
}

export default App;
