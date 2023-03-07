import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/routes/Books';
import Categories from './components/routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
