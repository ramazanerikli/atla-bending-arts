import './App.css';
import React, { useState } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Air from './pages/Air';
import Water from './pages/Water';
import Fire from './pages/Fire';
import Earth from './pages/Earth';

import AirSymbol from './images/air.png';
import FireSymbol from './images/fire.png';
import WaterSymbol from './images/water.png';
import EarthSymbol from './images/earth.png';

function App() {

  const [color, setColor] = useState("");

  return (
    <div className="app">
    <div className="app-container" style={{ backgroundColor: color }}>
      <div className="content">
        <HashRouter>
        <Route exact path="/" component={Water} />
        <Route path="/air" component={Air} />
        <Route path="/fire" component={Fire} />
        <Route path="/water" component={Water} />
        <Route path="/earth" component={Earth} />
        <div className="control">
          <ul className="links">
            <li className="item item--air">
              <NavLink to="/air" onClick={() => setColor("#fffdbc")}>
                <img src={AirSymbol}/>AIR
              </NavLink>
              </li>
              <li className="item item--water">
              <NavLink to="/water" onClick={() => setColor("skyblue")}>
                <img src={WaterSymbol}/>WATER
              </NavLink>
              </li>
              <li className="item item--fire">
              <NavLink to="/fire" onClick={() => setColor("#ffe4db")}>
                <img src={FireSymbol}/>FIRE
              </NavLink>
              </li>
              <li className="item item--earth">
              <NavLink to="/earth" onClick={() => setColor("#daffe9")}>
                <img src={EarthSymbol}/>EARTH
              </NavLink>
              </li>
          </ul>
        </div>
          </HashRouter>
      </div>        
    </div>
  </div>
  );
}

export default App;
