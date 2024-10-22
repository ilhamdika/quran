import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import HomePage from './Pages/Index'
import Surah from "./Pages/Surah";
import SurahDetail from "./Pages/SurahDetail";
import About from "./Pages/About";
import AOS from 'aos';
import { useEffect } from "react";

const app = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <LayoutPage>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/surah" element={<Surah />} />
            <Route path="/detailSurah/:nomorSurah" element={<SurahDetail />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </LayoutPage>
  );
}

export default app;