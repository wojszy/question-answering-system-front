import React from "react";
import "./RecordList.css";

const RecordList = ({ records }) => {
  return (
    <div className="record-container">
      <h2>Lista Nagrań</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Plik Audio</th>
              <th>Pytanie</th>
              <th>Odpowiedź</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.audioFileName}</td>
                <td>{record.transcription}</td>
                <td>{record.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {records.length > 2 && (
        <p className="scroll-message">
          Przewiń w dół, aby zobaczyć więcej nagraniach.
        </p>
      )}
    </div>
  );
};

export default RecordList;
