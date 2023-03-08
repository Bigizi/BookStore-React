import React from 'react';
import NewBook from '../NewBook';
import Book from '../Book';

function Books() {
  return (
    <div className="book-container">
      <Book />
      <NewBook />
    </div>
  );
}

export default Books;
