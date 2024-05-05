
import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style-initialization/global-style";
import ResetStyle from "./style-initialization/reset-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "LandingPage";
import {LoginPage} from "./Auth";
import {SignupPage} from "./Auth";

import { SharedPage, FolderPage } from "Folder_and_Shared";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/folder" element={<FolderPage />}></Route>
		<Route path="/shared" element={<SharedPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);