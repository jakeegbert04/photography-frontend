import { useState } from "react";
import { useAuthInfo } from "../../context/AuthProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthInfo();

  function handleSubmit(e) {
    e.preventDefault();
    const loginBody = {
      email: email,
      password: password,
    };

    login(loginBody);
  }

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
