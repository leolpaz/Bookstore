import React from 'react';
import Book from './Book';

const List = () => {
  const books = [
    {
      name: 'placeholderOne',
      category: 'action',
      author: 'placeholder author',
      completed: 0,
      chapter: 1,
      id: 1,
    },
    {
      name: 'placeholderTwo',
      category: 'action',
      author: 'placeholder author',
      completed: 0,
      chapter: 1,
      id: 2,
    },
  ];
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
          />
        </div>
      ))}
    </div>
  );
};

export default List;
