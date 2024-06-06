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
      <Typography variant="h4" gutterBottom component="div">
        Historia nagrań
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plik Audio</TableCell>
              <TableCell>Pytanie</TableCell>
              <TableCell>Odpowiedź</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <RecordItem key={record.id} record={record} />
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
