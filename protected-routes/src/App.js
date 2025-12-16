import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./component/AboutPage";
import HomePage from "./component/HomePage";
import LoginPage from "./component/LoginPage";
import TeamsPage from "./component/TeamsPage";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <header style={{ padding: 20, margin: 20, background: 'gray', textAlign: 'center' }}>
        My App
        <nav style={{ padding: 10 }}>
          <a href="/">Home </a>
          <a href="/About">About </a>
          <a href="/Teams">Teams </a>
          <a href="/Login">Login </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/Login" element={<LoginPage />} ></Route>
          <Route element={<ProtectedRoute/>}>
            <Route path="/About" element={<AboutPage />} ></Route>
            <Route path="/Teams" element={<TeamsPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
