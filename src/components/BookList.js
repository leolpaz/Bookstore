import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBooks } from '../redux/books/books';
import Book from './Book';

const List = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  const transformData = async (data) => {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const arr = [];
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
    dispatch(loadBooks(arr));
  };

  const loadFromAPI = async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YM3PSnyKoYXp8BbKCQ5a/books', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await (response.json());
    transformData(data);
  };

  useEffect(() => {
    loadFromAPI();
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
