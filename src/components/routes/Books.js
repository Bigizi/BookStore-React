import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewBook from '../NewBook';
import Book from '../Book';
import { fetchBooksAsync } from '../../redux/books/Books';

function Books() {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  let output;
  if (isLoading) output = <h4>Loading...</h4>;

  if (books?.length > 0) {
    output = books.map((index) => (
      <Book
        key={index.item_id}
        id={index.item_id}
        title={index.title}
        author={index.author}
        category={index.category}
      />
    ));
  }

  if (!isLoading && books?.length === 0) {
    output = <h4>No books available, Please add book</h4>;
  }
  return (
    <>
      <div className="row">
        <ul className="books-list">{output}</ul>
      </div>
      <div className="hr" />
      <NewBook />
    </>
  );
}

export default Books;
