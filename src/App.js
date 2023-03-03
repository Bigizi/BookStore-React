import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/routes/Books';
import Categories from './components/routes/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
