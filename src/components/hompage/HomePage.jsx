import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Navigate } from "react-router-dom";

import HeaderBar from "./HeaderBar.jsx";
import SearchBar from "./SearchBar.jsx";
import CategoryBar from "./CategoryBar.jsx";
import SampleProduct from "./SampleProduct.jsx";
import ExploreProducts from "./ExploreProducts.jsx";
import Footer from "./Footer.jsx";
import DailyDeals from "./DailyDeals.jsx";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <HeaderBar />
      <SearchBar />
      <CategoryBar />
      <SampleProduct />
      <br />
      <br />
      <ExploreProducts />

      <br />
      <br />
      
      <DailyDeals />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />


    </div>
  );
}

export default HomePage;
