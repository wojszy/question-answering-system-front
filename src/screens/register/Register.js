import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Użycie useHistory
import {
  Container,
  LoginBox,
  Title,
  Input,
  Button,
  ErrorMessage,
} from "./LoginStyles";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory(); // Zamiast useNavigate, używamy useHistory

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "/api/user",
        {
          username: email,
          credentials: [
            {
              value: password,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Rejestracja udana:", response.data);
      alert("Registration successful!");
      history.push("/"); // Przekierowanie do ekranu logowania
    } catch (error) {
      console.error("Błąd rejestracji:", error);
      setError("Registration failed");
      history.push("/");
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Rejestracja</Title>
        <form onSubmit={handleRegister}>
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
          <Input
            type="password"
            placeholder="Potwierdź hasło"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">Zarejestruj</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </LoginBox>
    </Container>
  );
};

export default RegisterScreen;
