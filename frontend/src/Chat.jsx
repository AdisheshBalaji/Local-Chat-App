import { useNavigate } from "react-router-dom";
import "./styles.css";

// Handles the main user-interface page after logging in
export default function Chat({ profile }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleMessage = () => {
    navigate("/messages");
  };

  return (
    <div className="chat-container">
      <h1>Hello, {profile.username}!</h1>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>

      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <ul>
          <li><button onClick={() => setActivePage("home")}>Home</button></li>
          <li><button onClick={() => navigate("/search")}>Search</button></li>
          <li><button onClick={handleMessage}>Messages</button></li>
          <li><button onClick={handleProfile}>Profile</button></li>
        </ul>
      </nav>
    </div>
  );
}
