import React, { useState } from "react";
import "./App.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSendClick = () => {
    if (inputText.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: inputText.trim(),
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div className="chat-app">
      <div className="message-thread">
        <h1 className="heading-chat">Chat Application</h1>
        <div>
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="message-sender ">{message.user}: </div>
              <div className="message-text">{message.text}</div>
              <div className="message-timestamp">11:48pm</div>
            </div>
          ))}
        </div>
      </div>
      <div className="input-section">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="user-input"
        />
        <button onClick={handleSendClick} className="send-msg-btn">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
