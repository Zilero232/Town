import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/views/Home";
import Profile from "@/views/Profile";
import Register from "@/views/Register";
import Auth from "@/views/Auth";
import MainModals from "@/components/modals/MainModals";
import { useModal } from "./hooks";

function App() {
  const [, , isActiveModal] = useModal();

  useEffect(() => {
    document.body.style.overflow = isActiveModal ? "hidden" : "auto";
  }, [isActiveModal]);

  return (
    <div className="App main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <MainModals />
    </div>
  );
}

export default App;
