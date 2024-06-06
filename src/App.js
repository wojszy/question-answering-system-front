import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginScreen from "./screens/login/Login";
import RegisterScreen from "./screens/register/Register";
import HomeScreen from "./screens/home/Home";
import ChatScreen from "./screens/chat/ChatScreen";
import HistoryScreen from "./screens/history/History";
import { AuthProvider, useAuth } from "./auth/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginRouteWrapper} />
          <Route path="/register" component={RegisterScreen} />
          <PrivateRoute path="/home" component={HomeScreen} />
          <PrivateRoute path="/chat" component={ChatScreen} />
          <PrivateRoute path="/history" component={HistoryScreen} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

const LoginRouteWrapper = (props) => {
  const { isAuthenticated, handleLogin } = useAuth();

  return isAuthenticated ? (
    <Redirect to="/home" />
  ) : (
    <LoginScreen onLogin={handleLogin} {...props} />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default App;
