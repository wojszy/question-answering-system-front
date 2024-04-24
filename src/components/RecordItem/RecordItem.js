import React from "react";
import "./RecordItem";

const RecordItem = ({ record }) => {
  const downloadUrl = `/api/download/${record.audioFileName}`;

  return (
    <tr className="record-item">
      <td>
        <a href={downloadUrl} download className="record-link">
          {record.audioFileName}
        </a>
      </td>
      <td>{record.transcription}</td>
      <td>{record.answer}</td>
    </tr>
  );
};

export default RecordItem;
