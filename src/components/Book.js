import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    name, category, author, completed, chapter, id,
  } = props;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="book-info">
        <p className="category">{category}</p>
        <p className="book-title">{name}</p>
        <p className="author">{author}</p>
        <div className="btn-container">
          <button className="book-btn" type="button">Comments</button>
          <button className="book-btn" onClick={removeHandler} type="button">Remove</button>
          <button className="book-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="completion">
        <AiOutlineLoading3Quarters />
        <div className="comp-info">
          <p className="comp-nbr">
            {completed}
            %
          </p>
          <p className="comp-txt">completed</p>
        </div>
      </div>
      <div className="chapter-info">
        <p className="cur-chapter">CURRENT CHAPTER</p>
        <p className="chapter">{chapter}</p>
        <button className="update-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </>
  );
};

Book.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
