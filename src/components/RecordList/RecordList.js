import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import RecordItem from "../RecordItem/RecordItem";

const RecordList = ({ records }) => {
  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plik Audio</TableCell>
              <TableCell>Transkrypcja</TableCell>
              <TableCell>Odpowiedź</TableCell>
              <TableCell>Data Utworzenia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <RecordItem key={record.idRecording} record={record} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {records.length > 2 && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Przewiń w dół, aby zobaczyć więcej nagrań.
        </Typography>
      )}
    </Box>
  );
};

export default RecordList;
