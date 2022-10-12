/* eslint-disable */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/starred" element={<Starred />} />

        <Route path="/show/:id" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
