import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";

import AuthRoute from "./components/Routes/AuthRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PojokBeasiswa from "./pages/PojokBeasiswa";
import Komunitas from "./pages/Komunitas";
import StudyAbroad from "./pages/StudyAbroad";
import Artikel from "./pages/Artikel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/pojokbeasiswa" element={<PojokBeasiswa />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/studyabroad" element={<StudyAbroad />} />
          <Route path="/artikel" element={<Artikel />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
