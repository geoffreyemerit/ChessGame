import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <div className="w-screen h-screen bg-[#e8e5e2] flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="*" element={<ChessBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
