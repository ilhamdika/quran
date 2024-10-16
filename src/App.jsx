import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import TypeIt from "typeit-react";
import Button from "./components/Button";
import Card from "./components/Card";
import HomePage from './Pages/Index'
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
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
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    </LayoutPage>
  );
}

export default app;