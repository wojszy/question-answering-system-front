import React from "react";
import { TableRow, TableCell } from "@mui/material";

const RecordItem = ({ record }) => {
  return (
    <TableRow>
      <TableCell>{record.audioFileName}</TableCell>
      <TableCell>{record.transcription}</TableCell>
      <TableCell>{record.answer}</TableCell>
    </TableRow>
  );
};

export default RecordItem;
