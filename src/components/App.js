import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const id = setInterval(
      () => setCurrentTime(new Date().toLocaleString()),
      1000
    );
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div id="main">
      <div className="date-time">{currentTime}</div>
    </div>
  );
};

export default App;
