import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ShowProfile({ profile }) {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p className="bio">Hello, I am <strong>{profile.username}</strong></p>
      <p className="friends">Friends: (Coming Soon)</p>
    </div>
  );
}
