import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, addBookAsync } from '../redux/books/Books';
import './newbook.css';

const NewBook = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!title.trim() || !author.trim()) return;

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

  return (
    <div className="container">
      <div>
        <p className="form-head">ADD NEW BOOK</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Book's Title"
            id="title"
            aria-label="Book title input...."
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className="title-input"
            required
          />
          <input
            type="text"
            placeholder="Author's Name"
            name="author"
            id="author"
            aria-label="Book author input"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
            className="author-input"
            required
          />
          <select
            name="category"
            id="category"
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Book Category"
            required
            className="cat-input"
          >
            <option value="">Choose Category...</option>
            <option value="Technology">Technology</option>
            <option value="Language">Language</option>
            <option value="Science">Science</option>
          </select>
          <button type="submit" className="submit-btn">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBook;
