import React from "react";

import { Routes, Route } from "react-router-dom";

import {
  Main,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Onboarding4,
  Onboarding5,
} from "./pages";

/**
 * 1. useState,useEffect,Component,React router dom,
 * 2. 전역상태관리
 * React.Context
 *
 *
 */
function AppIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/on1" element={<Onboarding1 />} />
      <Route exact path="/on2" element={<Onboarding2 />} />
      <Route exact path="/on3" element={<Onboarding3 />} />
      <Route exact path="/on4" element={<Onboarding4 />} />
      <Route exact path="/on5" element={<Onboarding5 />} />
    </Routes>
  );
}

export default AppIndex;
