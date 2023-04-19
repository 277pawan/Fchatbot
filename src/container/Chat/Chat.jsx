import React, { useState } from "react";
import "./Chat.css";

function Chatbot() {
  const [chatLog, setChatLog] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    document.querySelector(".spinner").style.display = "block";
    document.querySelector(".chat-send-btn").style.display = "none";
    const response = await fetch("http://localhost:3002/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: inputValue }),
    });

    const data = await response.json();

    setChatLog([...chatLog, { prompt: inputValue, response: data.message }]);
    document.querySelector(".spinner").style.display = "none";
    document.querySelector(".chat-send-btn").style.display = "block";

    setInputValue("");
  }

  return (
    <div className="chat-container">
      <h1 className="heading1">Chatbot Demo</h1>
      <div className="chat-log">
        {chatLog.map((chat, index) => (
          <div className="chat-item" key={index}>
            <p className="chat-prompt">You: {chat.prompt}</p>
            <p className="chat-response">Chatbot: {chat.response}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your message"
          className="chat-input"
        />
        <div className="spinner"></div>
        <button type="submit" className="chat-send-btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
