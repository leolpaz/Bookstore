import React from 'react';

const Books = () => (
  <>
    <div className="books-container" />
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select disabled>
        <option value="category">Category</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </>
);

export default Books;
