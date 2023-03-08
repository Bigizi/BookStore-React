import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author }));
    } else {
      alert('Fields can not be empty');
    }
    setAuthor('');
    setTitle('');
  };
  const styles = {
    frm: {
      display: 'flex',
      flexDirection: 'column',
      width: '180px',
      gap: '5px',
    },
  };
  return (
    <div className="add-new-book">
      <h1>Add New Book</h1>
      <form className="frm" style={styles.frm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBook;
