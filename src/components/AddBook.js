import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  
  const titleHandler = (e) => {
    setTitle((prev) => e.target.value)
  }

  const authorHandler = (e) => {
    setAuthor((prev) => e.target.value)
  }

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      name: title,
      category: 'placeholder category',
      author: author,
      completed: 0,
      chapter: 1,
      id: uuidv4(),
    };
    e.target.reset();
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" onChange={titleHandler} placeholder="Book title" required/>
      <input type="text" onChange={authorHandler} placeholder="Author name" required/>
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
