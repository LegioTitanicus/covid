import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="login">
      <form>
        {/* in form: action="someSeverPage" */}
        <label for="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        <label for="pwd">
          Password:
          <input
            type="password"
            id="pwd"
            name="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input id="login-button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
