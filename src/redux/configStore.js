import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
);

export default store;
