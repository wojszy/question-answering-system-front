import React, { useState, useRef, useEffect } from "react";
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
  Container,
  Grid,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useAuth } from "../../auth/AuthContext";
import UploadForm from "../../components/UploadForm/UploadForm";

const drawerWidth = 240;

const ChatScreen = () => {
  const { handleLogout } = useAuth();
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUpload = async () => {
    // Symulacja przetwarzania pliku
    const simulatedTranscription = "Symulowana transkrypcja pliku audio.";
    const simulatedResponse = "Symulowana odpowiedź sztucznej inteligencji.";

    setMessages((prevMessages) => [
      { type: "user", text: simulatedTranscription },
      { type: "ai", text: simulatedResponse },
      ...prevMessages,
    ]);
  };

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
        sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column" }}
      >
        <Toolbar />
        <Typography variant="h2">Chat</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="sm" sx={{ height: 400, overflowY: "auto" }}>
            {messages.map((message, index) => (
              <Grid
                key={index}
                container
                justifyContent={
                  message.type === "user" ? "flex-end" : "flex-start"
                }
              >
                <Grid item xs={6}>
                  <Box
                    sx={{
                      bgcolor:
                        message.type === "user"
                          ? "primary.main"
                          : "secondary.main",
                      color: "white",
                      p: 2,
                      borderRadius: "10px",
                      mb: 2,
                    }}
                  >
                    <Typography variant="body1">{message.text}</Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
            <div ref={messagesEndRef} />
          </Container>
        </Box>
        <UploadForm onUpload={handleUpload} />
        <Box sx={{ mt: "auto" }}>
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
    </Box>
  );
};

export default ChatScreen;
