import React from "react";
import { Route, Routes } from 'react-router-dom';
import Game from "./pages/game";
import Home from "./pages/home";


function App() {
  return (
    <Routes>
      <Route exact to path="/" element={<Home />} />
      <Route exact to path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;