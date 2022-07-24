import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  let time = new Date().toLocaleDateString();

  const [currentTime, setCurrentTime] = useState(" ");

  const upDateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(upDateTime, 1000);
  return (
    <div id="main">
      <div className="date-time">
        {time} , {currentTime}
      </div>
    </div>
  );
};

export default App;
