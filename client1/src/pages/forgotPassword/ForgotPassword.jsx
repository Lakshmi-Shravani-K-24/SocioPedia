import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [sport, setSport] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3001/api/users/${email}`);
      console.log(res);
      console.log(newpassword);
      if (res?.data.sport === sport) {
        const res2 = await axios.post(
          `http://localhost:3001/api/users/${res.data._id}`,
          {
            password: newpassword,
          }
        );
        console.log(res2);
        navigate("/login");
      } else {
        console.log("You have entered wrong sport");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Cool Connect</h3>
            <span className="loginDesc">
              Connect with friends and explore the world on Cool Connect.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                placeholder="Enter Your Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="loginInput"
              />
              <input
                placeholder="Enter Your Favourite Sport"
                type="text"
                required
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="loginInput"
              />
              <input
                placeholder=" New Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="submit" className="loginRegisterButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
