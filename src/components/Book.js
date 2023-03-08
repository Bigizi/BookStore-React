import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Book = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeBook(bookId));
  };
  const styles = {
    content: {
      display: 'flex',
      flexDirection: 'row',
      gap: '6px',
    },
    para: {
      fontWeight: 'bold',
    },
  };
  return (
    <div className="book-container">
      {book.map((book) => (
        <div key={book.id} className="content" style={styles.content}>
          <p className="para" style={styles.para}>{book.title}</p>
          <p>{book.author}</p>
          <span>
            <button type="button" onClick={() => handleRemove(book.id)}>
              Remove
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Book;
