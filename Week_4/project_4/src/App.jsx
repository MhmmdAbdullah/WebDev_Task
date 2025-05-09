import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./components/Navbar/LandingPage.jsx"; // pastikan path ini sesuai

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default App;
