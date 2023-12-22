import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const [sport, setSport] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        sport: sport,
      };
      try {
        await axios.post("http://localhost:3001/api/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handlelogin = () => {
    navigate("/login");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Cool Connect</h3>
          <span className="loginDesc">
            Connect with friends and explore the world on Cool Connect.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <input
              placeholder="Favourite Sport"
              required
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="loginInput"
              type="text"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={handlelogin}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
