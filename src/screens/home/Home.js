import React from "react";
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

const drawerWidth = 240;

const HomeScreen = () => {
  const { handleLogout } = useAuth();

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
            background: "linear-gradient(to bottom, #3f51b5, #ffffff)", // Gradient tła
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
        <Typography variant="h2">Strona główna</Typography>
        <Typography variant="h3" sx={{ mt: 4, mb: 4 }}>
          Informacje o stronie frontendowej
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          1. Struktura aplikacji: Nasza aplikacja składa się z kilku komponentów
          React, z których każdy jest odpowiedzialny za renderowanie różnych
          części interfejsu użytkownika.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          2. Komponenty Material-UI: Wykorzystujemy komponenty Material-UI,
          które są zgodne z Material Design. Przykładowo, `Drawer` służy do
          tworzenia bocznego menu, a `Typography` do renderowania tekstu.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          3. Obsługa autoryzacji: Nasza aplikacja ma mechanizm uwierzytelniania
          użytkowników. Po zalogowaniu wyświetlamy powitanie użytkownika oraz
          dostępne funkcje.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          4. Nawigacja: Korzystamy z React Router do nawigacji między różnymi
          widokami aplikacji przy użyciu komponentu `Link`, który renderuje
          linki nawigacyjne.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          5. Dynamiczne dane: Wykorzystujemy dynamiczne dane, takie jak
          aktualnie zalogowany użytkownik (`currentUser`) oraz nagrania
          (`records`), które są renderowane w odpowiednich częściach interfejsu.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          6. Stylizacja i układ: Oferujemy niestandardową stylizację
          komponentów, taką jak gradientowe tło menu bocznego czy odpowiednie
          rozmieszczenie elementów na stronie. Stylizacja jest realizowana przy
          pomocy `sx` w Material-UI, co umożliwia definiowanie stylów wewnątrz
          komponentów React.
        </Typography>
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

export default HomeScreen;
