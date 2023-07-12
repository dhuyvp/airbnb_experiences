import React from 'react';
import "./App.css";
import Activities from './activities';
import ForSell from './Sell';
import airbnb from "./icons/airbnb 1.svg";


function App() {
  const detailDescription = {
    title: "Online Experiences",
    detail: "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.",
  };

  return (
    <div className="App">
      <div className="App-border">
        <div className="App-header">
          <img src={airbnb} className="Airbnb-header" alt="airbnbHeader" />
        </div>

        <div className="App-body">
          {/* Display all activities */}
          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}>
            <div className="Picture-frame">
              <Activities />
            </div>
          </div>

          {/* Description */}
          <div className="Description"> {detailDescription.title} </div>
          <div className='Detail'> {detailDescription.detail} </div>

          {/* For sell */}
          <ForSell />
        </div>
      </div>
    </div>

  );
}

export default App;
