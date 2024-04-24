import React, { useState, useEffect } from "react";
import "./App.css";
import sampleRecords from "./records/sampleRecords";
import UploadForm from "./components/UploadForm/UploadForm";
import RecordList from "./components/RecordList/RecordList";

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
      <h1>Inteligentny system odpowiedzi na pytania</h1>

      <RecordList records={records} />
      <UploadForm onUpload={() => {}} />
    </div>
  );
};

export default App;
