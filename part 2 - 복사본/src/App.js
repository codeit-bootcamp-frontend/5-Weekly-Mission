import "./reset.css";
import "./globalStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/shared";
import Folder from "./pages/folder";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/shared" element={<Shared/>}></Route>
  <Route path="/folder" element={<Folder/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
