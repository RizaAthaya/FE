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
import Home2 from "./pages/Home2";
import Dashboard from "./pages/DashboardKelasSaya";
import DashboardKonsultasi from "./pages/DashboardKonsultasi";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home2 />} />
        <Route path="/pojokbeasiswa" element={<PojokBeasiswa />} />
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/studyabroad" element={<StudyAbroad />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/kelas" element={<Dashboard />} />
        <Route path="/dashboard/konsultasi" element={<DashboardKonsultasi/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
