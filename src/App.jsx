import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Front from './Component/Front';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Front />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
