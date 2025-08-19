import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import {Routes, Route} from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
