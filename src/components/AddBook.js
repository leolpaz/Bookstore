import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      name: e.target.title.value,
      category: 'placeholder category',
      author: e.target.author.value,
      completed: 0,
      chapter: 1,
      id: uuidv4(),
    };
    e.target.reset();
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author name" />
      <select disabled>
        <option value="category">Category</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;

// name: 'placeholderOne',
// category: 'action',
// author: 'placeholder author',
// completed: 0,
// chapter: 1,
// id: 1,
