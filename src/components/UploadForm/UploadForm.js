import React, { useState } from "react";
import "./UploadForm.css";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("audioFile", file);

    try {
      // Tutaj można dodać logikę wysyłania pliku na serwer
      console.log("Przesłano plik:", file.name);
      // Wywołujemy callback onUpload po udanym przesłaniu pliku
      onUpload();
    } catch (error) {
      console.error("Błąd podczas przesyłania pliku:", error);
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
      </form>
    </div>
  );
};

export default UploadForm;
