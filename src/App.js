import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./screens/login/Login";
import sampleRecords from "./records/sampleRecords";
import UploadForm from "./components/UploadForm/UploadForm";
import RecordList from "./components/RecordList/RecordList";
import Register from "./screens/register/Register";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(sampleRecords);
    //fetchRecordsFromDatabase();
  }, []);

  // const fetchRecordsFromDatabase = async () => {
  //   try {
  //     const response = await fetch("/api/records");
  //     const data = await response.json();
  //     setRecords(data);
  //   } catch (error) {
  //     console.error("Błąd podczas pobierania nagrań:", error);
  //   }
  // };

  return (
    <div className="container">
      <Login />
      <Register />
      <h1>Inteligentny system odpowiedzi na pytania</h1>

      <RecordList records={records} />
      <UploadForm onUpload={() => {}} />
    </div>
  );
};

export default App;
