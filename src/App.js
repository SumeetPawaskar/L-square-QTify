import React from "react";
import "./App.css";

import AlbumSongsPage from "./components/Album_Songs_Page/AlbumSongsPage";
import HomePage from "./components/Homepage/Homepage";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/album/:title" element={<AlbumSongsPage />} />
    </Routes>
  );
};

export default App;
