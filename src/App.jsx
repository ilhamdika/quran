import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import TypeIt from "typeit-react";
import Button from "./components/Button";
import Card from "./components/Card";
import HomePage from './Pages/Index'
import SurahDetail from "./Pages/SurahDetail";
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
            <Route path="/detailSurah/:nomorSurah" element={<SurahDetail />} />
        </Routes>
    </LayoutPage>
  );
}

export default app;