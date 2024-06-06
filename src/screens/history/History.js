import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  Divider,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useAuth } from "../../auth/AuthContext";
import RecordList from "../../components/RecordList/RecordList";
import sampleRecords from "../../records/sampleRecords";

const drawerWidth = 240;

const HistoryScreen = () => {
  const { handleLogout, currentUser } = useAuth();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(sampleRecords);
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(to bottom, #3f51b5, #ffffff)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              padding: "10px",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">{`Witaj użytkowniku ${currentUser?.email}`}</Typography>
          </Box>
          <Divider />
          <Box sx={{ overflow: "auto", flexGrow: 1 }}>
            <List>
              <ListItem button component={Link} to="/home">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/chat">
                <ListItemText primary="Czat" />
              </ListItem>
              <ListItem button component={Link} to="/history">
                <ListItemText primary="Historia nagrań" />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box>
          <Divider />
          <ListItem button onClick={handleLogout} sx={{ marginBottom: "10px" }}>
            <Logout />
            <ListItemText primary="Wyloguj" />
          </ListItem>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Toolbar />
          <Typography variant="h2">Historia nagrań</Typography>
          <RecordList records={records} />
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          Szymański, Zięba, Ziomek, Erbel
        </Typography>
      </Box>
    </Box>
  );
};

export default HistoryScreen;