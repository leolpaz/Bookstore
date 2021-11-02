import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const List = () => {
  const books = useSelector((state) => state.booksReducer);

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
