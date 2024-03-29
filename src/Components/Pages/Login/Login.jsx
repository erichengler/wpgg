import { useState } from "react";
import { useNavigate } from "react-router-dom";

import password_icon from "../../../Assets/images/password.png";
import user_icon from "../../../Assets/images/person.png";
import "./Login.css";

const Login = () => {
  // ------- State for storing username, password, header -------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formHeader, setFormHeader] = useState("Login");

  const navigate = useNavigate();

  // ------- Handle login submit -------
  const handleSubmit = (event) => {
    event.preventDefault();

    // ------- Register new user -------
    if (formHeader === "Register") {
      localStorage.setItem(
        "registeredUser",
        JSON.stringify({ username, password })
      );
      console.log("Registered new user:", { username, password });
    }

    // ------- Login user -------
    if (formHeader === "Login") {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (
        storedUser &&
        storedUser.username === username &&
        storedUser.password === password
      ) {
        console.log("Login successful");
        navigate("/games");
      } else {
        console.log("Login failed. Please try again.");
      }

      // ! Backend logic for login/register goes here
    }
  };

  // ------- Switch from login to register -------
  const toggleForm = () => {
    setFormHeader(formHeader === "Login" ? "Register" : "Login");
  };

  return (
    <div className="container">

      {/* ------- Login/Register form start ------- */}
      <form className="form" onSubmit={handleSubmit}>
        <span className="form-header">{formHeader}</span>

        {/* ------- Username input ------- */}
        <div className="input">
          <img className="form-image" src={user_icon} alt="Username" />
          <input
            className="inputField"
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* ------- Password input ------- */}
        <div className="input">
          <img className="form-image" src={password_icon} alt="Password" />
          <input
            className="inputField"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* ------- Submit button ------- */}
        <button className="submit-button" type="submit">
          {formHeader === "Login" ? "Login" : "Register"}
        </button>

        {/* ------- Form type (login or register) ------- */}
        <div className="form-type">
          <div className="toggle-button" onClick={toggleForm}>
            {formHeader === "Login"
              ? "Click Here To Register"
              : "Click Here To Login"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
