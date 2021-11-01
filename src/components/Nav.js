import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
  return (
    <nav className="nav-bar">
      <h1 className="title">Bookstore CMS</h1>
      <ul>
        {links.map((link) => (
          <React.Fragment key={link.id}>
            <li className="nav-item">
              <NavLink className="nav-link" to={link.path} exact>
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
