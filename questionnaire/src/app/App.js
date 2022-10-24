import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Header from '../components/header'
import Authentification from "../components/authentification";

function App() {
  return (
    <>
    <Header/>
    <Authentification/>
    </>
  );
}

export default App;
