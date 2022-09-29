import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/starred" element={<Starred />} />
      </Routes>
    </div>
  );
}

export default App;
