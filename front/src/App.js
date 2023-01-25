import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
  axios("https://www.betaseries.com/authorize"),{
    client_id: "91a576165315"
    redirect_uri: "https://localhost:3000/home"
  }
}

export default App;
