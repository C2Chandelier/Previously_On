import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/login/login';
import Home from './component/home/home';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"></div>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>;
          <Route exact path="/home" element={<Home />}></Route>;
        </Routes>
      </Router>
    )
  }
}
