import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, addBookAsync } from '../redux/books/Books';

const NewBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const bookData = {
      item_id: crypto.randomUUID(),
      title,
      author,
      category,
    };

    // Add book to state
    dispatch(booksActions.addBook(bookData));
    dispatch(addBookAsync(bookData));

    // Empty form inputs
    setAuthor('');
    setTitle('');
    setCategory('');
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
          onChange={(event) => setTitle(event.target.value)}
          className="title-input"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
        <select
          name="category"
          id="category"
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Book Category"
          required
          className="category-input"
        >
          <option value="">Choose Category...</option>
          <option value="Technology">Technology</option>
          <option value="Economics">Economics</option>
          <option value="Language">Language</option>
          <option value="Science">Science</option>
          <option value="Politics">Politics</option>
        </select>
        <button
          type="submit"
          className="submit-button"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBook;
