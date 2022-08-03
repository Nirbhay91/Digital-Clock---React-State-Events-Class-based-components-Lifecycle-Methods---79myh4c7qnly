import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  let time = new Date().toLocaleDateString();

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const upDateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  useEffect(() => {
    const id = setInterval(upDateTime, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time">
        {time} , {currentTime}
      </div>
    </div>
  );
};

export default App;
