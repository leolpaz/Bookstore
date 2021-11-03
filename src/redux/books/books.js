import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

const initialState = [];
export const addBook = (payload) => async (dispatch) => {
  const book = {
    title: `${payload.name}&&&${payload.author}`,
    category: `${payload.category}`,
    item_id: `${payload.id}`,
  };
  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YM3PSnyKoYXp8BbKCQ5a/books', book);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (id) => async (dispatch) => {
  const body = {
    item_id: id,
  };
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YM3PSnyKoYXp8BbKCQ5a/books/${id}`, body);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

export const loadBooks = () => async (dispatch) => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YM3PSnyKoYXp8BbKCQ5a/books');
  const arr = [];
  const keys = Object.keys(response.data);
  const values = Object.values(response.data);
  values.forEach((value, index) => {
    const obj = value[0];
    const splitArray = obj.title.split('&&&');
    const book = {
      name: splitArray[0],
      category: 'placeholder category',
      author: splitArray[1],
      completed: 0,
      chapter: 1,
      id: keys[index],
    };
    arr.push(book);
  });
  dispatch({
    type: LOAD_BOOKS,
    payload: arr,
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((element) => element.id !== action.id);
    case LOAD_BOOKS: return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
