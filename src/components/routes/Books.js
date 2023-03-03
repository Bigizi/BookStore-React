import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewBook from '../NewBook';
import Book from '../Book';

const Books = () => {
  const book = [
    { id: uuidv4(), title: 'home', author: 'Chriss' },
    { id: uuidv4(), title: 'React', author: 'Valery' },
    { id: uuidv4(), title: 'Java', author: 'Crispin' },
  ];

  return (
    <div className="book-container">
      <Book book={book} />
      <NewBook />
    </div>
  );
};

export default Books;
