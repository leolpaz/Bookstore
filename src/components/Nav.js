import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { changeClass } from '../redux/classes/class';

const NavBar = () => {
  const state = useSelector((state) => state.classesReducer);
  const dispatch = useDispatch();
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const clickHandler = (e) => {
    const event = e.target.text;

    if (event === 'Books' && state[0] === false) {
      dispatch(changeClass());
    } else if (event === 'Categories' && state[0] === true) {
      dispatch(changeClass());
    }
  };

  return (
    <nav className="nav-bar">
      <h1 className="title">Bookstore CMS</h1>
      <ul className="nav-list">
        {links.map((link, index) => (
          <React.Fragment key={link.id}>
            <li className="nav-item">
              <NavLink onClick={clickHandler} className={state[index] ? 'nav-link-active' : 'nav-link'} to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
