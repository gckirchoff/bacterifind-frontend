import React from 'react';
import { Link } from 'react-router-dom';
import './NavEl.scss';

const NavEl = ({ type }) => {
  return (
    <Link to={`${type === 'home' ? '/' : type}`} className="link">
      <h3 className="nav-el">{type}</h3>
    </Link>
  );
};

export default NavEl;
