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
import axios from "axios";

const drawerWidth = 240;

const HistoryScreen = () => {
  const { handleLogout } = useAuth();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const response = await axios.get("/api/recording/all?size=100&page=0", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRecords(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchRecords();
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
            <Link to="/home">
              <img src="logo.png" alt="QA logo" width="220" />
            </Link>
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
