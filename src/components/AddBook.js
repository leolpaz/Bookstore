import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const bookToAPI = async (book) => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YM3PSnyKoYXp8BbKCQ5a/books', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `${book.name}&&&${book.author}`,
        category: `${book.category}`,
        item_id: `${book.id}`,
      }),
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      name: title,
      category: 'placeholder category',
      author,
      completed: 0,
      chapter: 1,
      id: uuidv4(),
    };
    e.target.reset();
    dispatch(addBook(newBook));
    bookToAPI(newBook);
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" onChange={titleHandler} placeholder="Book title" required />
      <input type="text" onChange={authorHandler} placeholder="Author name" required />
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
