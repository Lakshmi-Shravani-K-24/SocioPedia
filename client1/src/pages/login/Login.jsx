import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import CircularProgress from "@mui/joy/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  const handlelogin = () => {
    navigate("/register");
  };
  const handleForgot = () => {
    navigate("/forgot");
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
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <p>Loading....</p> : "Log In"}
            </button>
            <span className="loginForgot" onClick={handleForgot}>
              Forgot Password?
            </span>
            <button className="loginRegisterButton" onClick={handlelogin}>
              {isFetching ? <p>Loading......</p> : "Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
