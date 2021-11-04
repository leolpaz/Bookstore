import React from 'react';
import Form from './AddBook';
import BookList from './BookList';

const Books = () => (
  <>
    <div className="books-page">
      <BookList />
      <h2 className="add-bk">ADD NEW BOOK</h2>
      <Form />
    </div>
  </>
);

export default Books;
