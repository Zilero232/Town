import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/views/Home";
import Profile from "@/views/Profile";
import Register from "@/views/Register";
import Auth from "@/views/Auth";

function App() {
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
    </div>
  );
}

export default App;
