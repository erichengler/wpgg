import { useState } from "react";

import password_icon from "../../Assets/images/password.png";
import user_icon from "../../Assets/images/person.png";
import "./Login.css";

const Login = () => {
  // ------- Storing username and password -------
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ------- Storing username and password -------
  const [formHeader, setFormHeader] = useState("Login");

  const login = (event) => {
    setFormHeader("Login");
  };

  const register = () => {
    setFormHeader("Register");
  };

  return (
    <>
      <h1>
        <i>WPGG</i>
      </h1>
      <div className="container">
        <form className="form">
          <span className="form-header">{formHeader}</span>
          <div className="input">
            <img className="form-image" src={user_icon} alt="Username" />
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <img className="form-image" src={password_icon} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="submit-button" type="submit">
            {formHeader === 'Login' ? 'Login' : 'Register'}
          </button>
          <div className="form-type">
            <div className="login" onClick={login}>
              Login
            </div>
            <div className="signup" onClick={register}>
              Register
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
