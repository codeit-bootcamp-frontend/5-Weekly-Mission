import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folder from "./folder";
import Shared from "./shared";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/shared" element={<Shared />} />
                <Route path="/folder" element={<Folder />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
