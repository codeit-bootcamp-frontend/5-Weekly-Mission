import "./App.css";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./page/Shared.js";
import Folder from "./page/Folder.js";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Shared" element={<Shared />}></Route>
        <Route path="/Folder" element={<Folder />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
