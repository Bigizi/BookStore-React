import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const styles = {
    content: {
      display: 'flex',
      flexDirection: 'row',
      gap: '6px',
    //   padding: '5px',
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
            <button type="button">Remove</button>
          </span>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    },
  )).isRequired,
};

export default Book;
