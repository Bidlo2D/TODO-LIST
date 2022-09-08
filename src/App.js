import './css/App.css';
import React from "react"
import Tasks from './components/Tasks';
const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header"></div>
        <div className="wrap">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
