import React from "react";

import { Routes, Route } from "react-router-dom";

import { Main, Onboarding1, Onboarding2 } from "./pages";

function AppIndex() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/on1" element={<Onboarding1 />} />
      <Route exact path="/on2" element={<Onboarding2 />} />
    </Routes>
  );
}

export default AppIndex;
