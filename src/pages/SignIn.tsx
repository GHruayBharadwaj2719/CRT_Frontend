import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { API_ENDPOINTS } from "../config/api";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const res = await fetch(API_ENDPOINTS.SIGN_IN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("fullName", data.fullName);

      navigate("/dashboard", { replace: true });

    } catch {
      setError("Server not reachable");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">Welcome back</p>

        {error && <div className="auth-error">{error}</div>}

        <div className="input-group">
          <label>Email</label>
          <div className="input-box">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="auth-footer">
          Don’t have an account? Sign up
        </div>
      </div>
    </div>
  );
};

export default SignIn;
