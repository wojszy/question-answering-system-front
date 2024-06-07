import React from "react";
import { TableRow, TableCell } from "@mui/material";

const RecordItem = ({ record }) => {
  const filePathParts = record.filePath.split("\\");
  const fileName = filePathParts[filePathParts.length - 1];

  const handleDownload = () => {
    window.open("http://localhost:8080/files/" + fileName, "_blank");
  };

  return (
    <TableRow>
      <TableCell onClick={handleDownload} style={{ cursor: "pointer", color: "blue" }}>
        {fileName} {/* Wyświetlanie nazwy pliku */}
      </TableCell>
      <TableCell>{record.transcribedText}</TableCell>
      <TableCell>{record.answer}</TableCell>
      <TableCell>{new Date(record.createDateTime).toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default RecordItem;