import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ChessBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
