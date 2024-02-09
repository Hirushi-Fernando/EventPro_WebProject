import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customize from './pages/Customize';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customize />} />
      </Routes>
    </Router>
  );
}

export default App;