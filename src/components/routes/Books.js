import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
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
