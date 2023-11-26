import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from "../Login/Login";
import User from "../User/User";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect to login */}
        <Route path="/" element={ <Navigate to="/login" />} />

        {/* Route for login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for user page */}
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
