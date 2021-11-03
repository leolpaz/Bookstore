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
      <div>
        <h3>{category}</h3>
        <h2>{name}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button">Comments</button>
          <button onClick={removeHandler} type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <AiOutlineLoading3Quarters />
        <div>
          <p>
            {completed}
            %
          </p>
          <p>completed</p>
        </div>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>{chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
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
