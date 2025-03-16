import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "./styles.css"

const socket = io("http://localhost:3000"); // Connect to backend server

export default function Messages({ profile }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on("receiveMessage", (msgData) => {
            setMessages((prev) => [...prev, msgData]);
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== "" && profile.username.trim() !== "") {
            const msgData = {
                username: profile.username,
                text: message
            };
            socket.emit("sendMessage", msgData);
            setMessage("");
        }
    };

    return (
        <div>
            <h2>Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.username}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
            <button className="back-btn" onClick={() => navigate("/chat")}>Home</button>
        </div>
    );
}

