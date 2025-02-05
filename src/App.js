import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Welcome to my app!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;