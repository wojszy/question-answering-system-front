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

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "hej@wp.pl" && password === "123") {
      onLogin(email);
    } else {
      setError("Invalid email or password");
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
