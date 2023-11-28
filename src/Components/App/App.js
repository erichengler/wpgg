import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from "../Login/Login";
import GamesList from "../GamesList/GamesList";
import AddGame from "../AddGame/AddGame";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {/* Redirect to login */}
        <Route path="/" element={ <Navigate to="/login" />} />

        {/* Route for login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for GamesList */}
        <Route path="/games" element={<GamesList />} />

        {/* Route for AddGame page */}
        <Route path="/addgame" element={<AddGame />} />

        {/* Route for About page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
