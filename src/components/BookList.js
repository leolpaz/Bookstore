import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBooks } from '../redux/books/books';
import Book from './Book';

const List = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div className="list-container">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <Book
            name={book.name}
            category={book.category}
            author={book.author}
            completed={book.completed}
            chapter={book.chapter}
            id={book.id}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
