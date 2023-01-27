import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/login/login';
import Home from './component/home/home';
import Episode from './component/episode/episode';
import Saison from './component/saison/Saison';
import Allepisode from './component/allepisode/allepisode';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"></div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>;
          <Route exact path="/home" element={<Home />}></Route>;
          <Route exact path="/episode" element={<Episode />}></Route>;
          <Route exact path="/saison" element={<Saison />}></Route>;
          <Route exact path="/allepisode" element={<Allepisode />}></Route>;
        </Routes>
      </Router>
    )
  }
}
