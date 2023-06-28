import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from 'react-router-dom';
import ebayLogo from "../assets/ebay-logo.png";
import "../App.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      alert(getErrorPrompt(error.code));
    }
  };

  // Function to get the prompt message based on error code
  const getErrorPrompt = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return "User not found. Please check your email and password.";
      case 'auth/wrong-password':
        return "Invalid password. Please try again.";
      // Add more cases for other error codes if needed
      default:
        return "An error occurred during sign-in. Please try again later.";
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 text-center">
        <h1><img src={ebayLogo} alt="Ebay Logo" className="ebay-logo" /> Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control input-lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control input-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Login</button>
        </form>
        <p className="mt-3">
          Not registered? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
