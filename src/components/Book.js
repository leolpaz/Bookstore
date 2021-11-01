import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Book = (props) => {
  const {
    name, category, author, completed, chapter,
  } = props;

  return (
    <>
      <div>
        <h3>{category}</h3>
        <h2>{name}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
};

export default Book;
