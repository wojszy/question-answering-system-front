import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LoginBox,
  Title,
  Input,
  Button,
  ErrorMessage,
} from "./LoginStyles.js";
import axios from "axios";

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/realms/qas/protocol/openid-connect/token",
        {
          client_id: "qas-client2",
          username: email,
          password: password,
          grant_type: "password",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      // Odczytaj token z odpowiedzi Keycloak
      const accessToken = response.data.access_token;
      // Zapisz token w localStorage
      localStorage.setItem("accessToken", accessToken);

      console.log("Udane logowanie:", response.data);
    } catch (error) {
      console.error("Błąd logowania:", error);
      setError("Nieprawidłowy email lub hasło");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Logowanie</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Zaloguj</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
        <p>
          Nie masz konta? <Link to="/register">Zarejestruj się</Link>
        </p>
      </LoginBox>
    </Container>
  );
};

export default LoginScreen;
