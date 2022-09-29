import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element="This is home page" />

      <Route path="/starred" element="This is starred" />
    </Routes>
  );
}

export default App;
