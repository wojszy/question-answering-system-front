import React, { useState } from "react";
import "./ChatForm.css";

const ChatForm = () => {
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [transcription, setTranscription] = useState("");
  const [response, setResponse] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("audioFile", file);

    try {
      // Simulujemy przesyłanie pliku i otrzymywanie transkrypcji oraz odpowiedzi
      const simulatedTranscription = "Simulated transcription of audio.";
      const simulatedResponse = "Simulated AI response.";

      setTranscription(simulatedTranscription);
      setResponse(simulatedResponse);

      setMessages([
        ...messages,
        { type: "user", text: simulatedTranscription },
        { type: "ai", text: simulatedResponse },
      ]);

      setFile(null);
    } catch (error) {
      console.error("Błąd podczas przesyłania pliku:", error);
    }
  };

  return (
    <div className="chat-form-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          accept="audio/wav"
          className="form-input"
          onChange={handleFileChange}
        />
        <button type="submit" className="form-button">
          Prześlij
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
