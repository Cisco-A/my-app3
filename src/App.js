import React from "react";
import Header from "./components/header";
import Form from "./components/form";
import sign from "./sign.png";

function App() {
  return (
    <div className="App">
      <Header src="logo.png" />
      <div className="mb">
        <div className="left-panel">
          <h2>We've Missed You</h2>
          <p>
            Kindly signin and get first access to the very best, community and
            unlock more opportunities.
          </p>
          <Form />
        </div>
        <div className="right-panel">
          <img className="right-image" src={sign} />
        </div>
      </div>
    </div>
  );
}

export default App;
