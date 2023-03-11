/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/caWRrZKKfOMTqyQBJwx4';
export const addBookAsync = createAsyncThunk(
  'books/postBook',
  async (bookData, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/books`, bookData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'An error occured while posting data',
      );
    }
  },
);

export const fetchBooksAsync = createAsyncThunk(
  'books/getBooks',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/books`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'An error occured while getting data',
      );
    }
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}/books/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Error occured deleting data',
      );
    }
  },
);

const initialState = {
  isLoading: false,
  books: [],
  categories: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, actions) => {
      const bookData = actions.payload;
      state.books.push(bookData);
    },

    removeBook: (state, actions) => {
      const idOfBookToRemove = actions.payload;
      state.books = state.books.filter(
        (book) => book.item_id !== idOfBookToRemove,
      );
    },
  },
  extraReducers: (builder) => {
    // Post a Book
    builder
      .addCase(addBookAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addBookAsync.rejected, (state) => {
        state.isLoading = false;
      });

    // Get Books
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const resObject = action.payload;

        const newBooksArr = [];
        const categoriesArr = [];
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const id in resObject) {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
          categoriesArr.push(bookObj?.category);
        }

        state.books = newBooksArr;
        state.categories = [...new Set(categoriesArr)];
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice.reducer;
