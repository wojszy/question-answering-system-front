import React, { useState } from "react";
import axios from "axios";
import "./UploadForm.css";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file); // Zmieniamy nazwę na "file" zgodnie z wymogiem API

    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        "/api/recording",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer " + token // Dodaj token do nagłówka
          },
        }
      );
      console.log("Przesłano plik:", response.data);
      // Wywołujemy callback onUpload po udanym przesłaniu pliku
      onUpload();
    } catch (error) {
      console.error("Błąd podczas przesyłania pliku:", error);
      setError("Wystąpił błąd podczas przesyłania pliku. Spróbuj ponownie.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="audio/wav"
          className="form-input"
          onChange={handleFileChange}
        />
        <button type="submit" className="form-button">
          Prześlij
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default UploadForm;
