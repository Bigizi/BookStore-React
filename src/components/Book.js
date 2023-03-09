/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import { booksActions, removeBookAsync } from '../redux/books/Books';
import Button from './Button';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;

  const handleRemove = (e) => {
    const { id } = e.target.dataset;
    dispatch(booksActions.removeBook(id));

    // Delete in the backend
    dispatch(removeBookAsync(id));
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
      <div className="content" style={styles.content}>
        <span>{category}</span>
        <p className="para" style={styles.para}>{title}</p>
        <p>{author}</p>
        <Button type="submit" dataId={id} handleClick={handleRemove}>
          Remove
        </Button>
        <Button type="button" data-id={id}>
          <span>Edit</span>
        </Button>
      </div>
      <div>
        <div>
          <span>70%</span>
          <span>Completed</span>
        </div>
      </div>
      <div>
        <span>Current Chapter</span>
        <h4>Chapter 56</h4>
        <button type="button" className="progress-btn">
          Update progress
        </button>
      </div>

    </div>
  );
};

export default Book;
