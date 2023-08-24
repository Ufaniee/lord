/** @format */

import React, { useState } from "react";
import Layout from "../../../components/global/Layout";

const HandleComplain = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        sender: "user", // or "rep" for customer care rep
      };

      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 py-8">
        <div className=" col-span-3 flex flex-col h-screen">
          <div className="flex-grow border p-4">
            <div className="flex flex-col h-full">
              {/* Chat messages */}
              <div className="flex-grow overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      message.sender === "user" ? "text-left" : "text-right"
                    }`}
                  >
                    <span
                      className={`px-2 py-1 rounded-lg inline-block ${
                        message.sender === "user"
                          ? "bg-blue-300 text-blue-800"
                          : "bg-green-300 text-green-800"
                      }`}
                    >
                      {message.text}
                    </span>
                  </div>
                ))}
              </div>
              {/* Message input */}
              <div className="flex p-2">
                <input
                  type="text"
                  className="flex-grow border rounded-l-lg p-2"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white p-2 rounded-r-lg"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>col 1</div>
      </div>
    </Layout>
  );
};

export default HandleComplain;
