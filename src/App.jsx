import React from "react";
import "../src/css/App.css";
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
import DashboardLama from "./pages/DashboardKelasSaya";
import DashboardKonsultasi from "./pages/DashboardKonsultasi";
import Profile from "./pages/Profile";
import Pembayaran from "./pages/Pembayaran";
import PembayaranBRI from "./pages/PembayaranBRI";
import PembayaranBNI from "./pages/PembayaranBNI";
import PembayaranBCA from "./pages/PembayaranBCA";
import PembayaranPermata from "./pages/PembayaranPermata";
import PembayaranSpesifikQris from "./pages/PembayaranQris";
import DashboardNew from "./pages/DashboardNew";
import Nyoba from "./pages/Nyoba";
import DetailArtikel from "./pages/DetailArtikel";

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
        <Route path="/dashboard" element={<DashboardNew />} />
        <Route path="/dashboard/kelas" element={<DashboardLama />} />
        <Route path="/dashboard/konsultasi" element={<DashboardKonsultasi />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/pembayaran/permata" element={<PembayaranPermata />} />
        <Route path="/pembayaran/bca" element={<PembayaranBCA />} />
        <Route path="/pembayaran/bni" element={<PembayaranBNI />} />
        <Route path="/pembayaran/qris" element={<PembayaranSpesifikQris />} />
        <Route path="/pembayaran/bri" element={<PembayaranBRI />} />
        <Route path="/nyoba" element={<Nyoba />} />
        <Route path="/detailartikel" element={<DetailArtikel />} />

      </Routes>
    </div>
  );
}

export default App;
