import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Link } from "react-router-dom";
import handleLogout from './HandleLogout';
import '../../App.css'; // Provide the correct relative path to App.css


const HeaderBar = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  if (currentUser) {
    var email = currentUser.email;

    var username = email.split('@')[0];
  }

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Hi, {username} 🚀</span>
        <div className="navbar-nav ml-auto">
          <button className="btn btn-link nav-item"><Link to="/chat">Chat</Link></button>
          <button className="btn btn-link nav-item">Sell</button>
          <button className="btn btn-link nav-item">Wishlist</button>
          <button className="btn btn-link nav-item">Cart</button>
          <button className="btn btn-link nav-item" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
