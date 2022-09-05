// import React, { useState, useEffect } from "react";
// import "../styles/App.css";
// const App = () => {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

//   useEffect(() => {
//     const id = setInterval(
//       () => setCurrentTime(new Date().toLocaleString()),
//       1000
//     );
//     return () => {
//       clearInterval(id);
//     };
//   }, []);

//   return (
//     <div id="main">
//       <div className="date-time">{currentTime}</div>
//     </div>
//   );
// };

// export default App;


import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
