import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import categoriesReducer from './categories/Categories';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
