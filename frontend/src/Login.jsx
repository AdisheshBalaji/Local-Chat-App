import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

// Handles the login page
export default function Login({ profile, setProfile }) {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState({ username: false, password: false });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleConfirm = (field) => {
    setConfirmed((prev) => ({ ...prev, [field]: true }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (confirmed.username && confirmed.password) {
      navigate("/chat");
    } else {
      alert("Please confirm both username and password before proceeding.");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to CONNECT</h1>

      <div className="input-group">
        <label htmlFor="username"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={profile.username}
          onChange={handleInputChange}
        />
        <button type="button" onClick={() => handleConfirm("username")}>
          Confirm Username
        </button>
      </div>

      <div className="input-group">
        <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={profile.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={() => handleConfirm("password")}>
          Confirm Password
        </button>
      </div>

      <button type="submit" onClick={handleLogin} className="login-btn">
        Login
      </button>
    </div>
  );
}
