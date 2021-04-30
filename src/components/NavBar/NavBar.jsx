import React from 'react';
import './NavBar.scss';
import NavEl from '../NavEl/NavEl';
import Title from '../Title/Title';

const NavBar = () => {
  return (
    <nav className="nav-container">
      <Title />
      <div className="links-container">
        <NavEl type="home" />
        <NavEl type="notes" />
      </div>
    </nav>
  );
};

export default NavBar;
