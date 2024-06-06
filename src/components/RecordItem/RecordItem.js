import React from "react";
import { TableRow, TableCell } from "@mui/material";

const RecordItem = ({ record }) => {
  return (
    <TableRow>
      <TableCell>{record.filePath}</TableCell>
      <TableCell>{record.transcribedText}</TableCell>
      <TableCell>{record.answer}</TableCell>
      <TableCell>{new Date(record.createDateTime).toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default RecordItem;
