import React, { useEffect } from "react";
import "../src/css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";

//routes
import AuthRoute from "./components/Routes/AuthRoute";
import ProtectedRoute from "./components/Routes/ProtectedRoute";

//pages

// free for all
import Home from "./pages/Home";
import PojokBeasiswa from "./pages/PojokBeasiswa";
import Komunitas from "./pages/Komunitas";
import StudyAbroad from "./pages/StudyAbroad";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import DetailKomunitas from "./pages/DetailKomunitas";
import DetailBeasiswa from "./pages/DetailBeasiswa";
import DetailSA from "./pages/DetailSA";

// auth
import Login from "./pages/Login";
import Register from "./pages/Register";

//login only
import Home2 from "./pages/Home2";
import Profile from "./pages/Profile";
import Pembayaran from "./pages/Pembayaran";
import PembayaranBRI from "./pages/PembayaranBRI";
import PembayaranBNI from "./pages/PembayaranBNI";
import PembayaranBCA from "./pages/PembayaranBCA";

import PembayaranSpesifikQris from "./pages/PembayaranQris";
import DashboardNew from "./pages/DashboardNew";
import AllCourse from "./pages/PojokBeasiswaLogin";
import KomunitasLogin from "./pages/KomunitasLogin";
import ArtikelLogin from "./pages/ArtikelLogin";
import StudyAbroadLogin from "./pages/StudyAbroadLogin";
import DetailArtikelLogin from "./pages/DetailArtikelLogin";
import DetailKomunitasLogin from "./pages/DetailKomunitasLogin";
import Modul from "./pages/Modul";
import DetailSALogin from "./pages/DetailSALogin";
import DetailBeasiswaLogin from "./pages/DetailBeasiswaLogin";

function App() {
  console.log(window.location.origin);

  // useEffect(() => {
  //   window.location.replace('http://localhost:5173/register');
  // }, [])

  return (
    <div className="App">
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/detailkomunitas" element={<DetailKomunitas />} />
          <Route path="/pojokbeasiswa" element={<PojokBeasiswa />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/studyabroad" element={<StudyAbroad />} />
          <Route path="/detailartikel" element={<DetailArtikel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detailbeasiswa" element={<DetailBeasiswa />} />
          <Route path="/detailprogram" element={<DetailSA />} />
          <Route path="/artikel" element={<Artikel />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home2 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/pembayaran/bca" element={<PembayaranBCA />} />
          <Route path="/pembayaran/bni" element={<PembayaranBNI />} />
          <Route path="/pembayaran/qris" element={<PembayaranSpesifikQris />} />
          <Route path="/pembayaran/bri" element={<PembayaranBRI />} />
          <Route path="/detailartikellogin" element={<DetailArtikelLogin />} />
          <Route path="/artikelLogin" element={<ArtikelLogin />} />
          <Route path="/komunitaslogin" element={<KomunitasLogin />} />
          <Route path="/pojokbeasiswalogin" element={<AllCourse />} />
          <Route path="/studyabroadlogin" element={<StudyAbroadLogin />} />
          <Route
            path="/detailkomunitaslogin"
            element={<DetailKomunitasLogin />}
          />
          <Route path="/detailprogramlogin" element={<DetailSALogin />} />
          <Route
            path="/detailbeasiswalogin"
            element={<DetailBeasiswaLogin />}
          />
          <Route path="/dashboard" element={<DashboardNew />} />
          <Route path="/modul" element={<Modul />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
