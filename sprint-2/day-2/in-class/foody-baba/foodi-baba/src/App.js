import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import SingleCard from "./pages/Menu/SingleCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
