import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import TicTacToe from "./components/TicTacToe.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main-game">
        <TicTacToe />
      </main>
      <Footer />
    </>
  );
};

export default App;