import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import Profile from "./Profile"
import Messages from "./Messages";



//main component handling route navigation
export default function App() {
  const [profile, setProfile] = useState({
    username: "",
    password: ""
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login profile={profile} setProfile={setProfile} />} />
        <Route path="/messages" element={<Messages profile={profile} />} />
        <Route path="/chat" element={<Chat profile={profile} />} />
        <Route path = "/profile" element = {<Profile profile = {profile} />} />
      </Routes>
    </Router>
  );
}
